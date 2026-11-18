const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const path = require("path");

const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: token });
const n2m = new NotionToMarkdown({ notionClient: notion });

// Busca somente as páginas com a caixa "Publicar" marcada (com paginação)
async function fetchPublishedPages() {
  const pages = [];
  let cursor;

  do {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filter: {
          property: "Publicar",
          checkbox: { equals: true },
        },
        ...(cursor && { start_cursor: cursor }),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Erro na API do Notion: ${JSON.stringify(data)}`);
    }

    pages.push(...data.results);
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);

  return pages;
}

async function syncNotion() {
  console.log("Conectando ao Notion e buscando páginas marcadas para publicação...");
  const pages = await fetchPublishedPages();
  console.log(`Encontradas ${pages.length} páginas para publicar.`);

  // Converte tudo antes de mexer nos arquivos, para não perder notas se algo falhar
  const notes = [];

  for (const page of pages) {
    const titleProp = Object.values(page.properties).find((prop) => prop.type === "title");
    const title = titleProp?.title[0]?.plain_text || "Sem-Titulo";

    const safeTitle = title.replace(/[^a-zA-Z0-9À-ÿ -]/g, "").replace(/\s+/g, "-");
    console.log(`Convertendo: ${title}...`);

    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    notes.push({
      fileName: `${safeTitle}.md`,
      content: `# ${title}\n\n${mdString.parent || ""}`,
    });
  }

  const dir = path.join(__dirname, "docs", "notas");

  // Remove as notas antigas: páginas desmarcadas não devem continuar no site
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });

  for (const note of notes) {
    fs.writeFileSync(path.join(dir, note.fileName), note.content);
  }

  console.log("Sincronização com VitePress concluída com sucesso!");
}

syncNotion().catch((err) => {
  console.error("ERRO:", err);
  process.exit(1);
});