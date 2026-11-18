const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const path = require("path");

const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

async function fetchPublishedPages() {
  const pages = [];
  let cursor = null;

  do {
    const body = {
      page_size: 100,
      filter: {
        property: "Publicar",
        checkbox: { equals: true },
      },
    };

    if (cursor) {
      body.start_cursor = cursor;
    }

    const response = await fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Erro na API do Notion: ${JSON.stringify(data)}`);
    }

    pages.push(...(data.results || []));
    cursor = data.has_more ? data.next_cursor : null;
  } while (cursor);

  return pages;
}

function makeSafeFileName(title, usedNames) {
  let base = title
    .replace(/[^a-zA-Z0-9À-ÿ -]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!base) {
    base = "Sem-Titulo";
  }

  if (base.toLowerCase() === "index") {
    base = "nota-index";
  }

  let fileName = `${base}.md`;
  let suffix = 2;

  while (usedNames.has(fileName.toLowerCase())) {
    fileName = `${base}-${suffix}.md`;
    suffix++;
  }

  usedNames.add(fileName.toLowerCase());
  return fileName;
}

function escapeMarkdownLabel(text) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]");
}

async function syncNotion() {
  if (!token || !databaseId) {
    throw new Error("Defina as variáveis NOTION_TOKEN e NOTION_DATABASE_ID.");
  }

  const notion = new Client({ auth: token });
  const n2m = new NotionToMarkdown({ notionClient: notion });

  console.log("Conectando ao Notion e buscando páginas marcadas para publicação...");
  const pages = await fetchPublishedPages();
  console.log(`Encontradas ${pages.length} páginas para publicar.`);

  // Converte as páginas antes de apagar os arquivos antigos
  const usedNames = new Set();
  const notes = [];

  for (const page of pages) {
    const titleProp = Object.values(page.properties || {}).find(
      (property) => property.type === "title"
    );

    const title =
      titleProp?.title?.map((item) => item.plain_text).join("") || "Sem-Titulo";

    const fileName = makeSafeFileName(title, usedNames);

    console.log(`Convertendo: ${title}...`);

    const markdownBlocks = await n2m.pageToMarkdown(page.id);
    const markdown = n2m.toMarkdownString(markdownBlocks);

    notes.push({
      title,
      fileName,
      content: `# ${title}\n\n${markdown.parent || ""}`,
    });
  }

  const notesDir = path.join(__dirname, "docs", "notas");

  // Recria a pasta para remover notas que já não estão marcadas para publicação
  fs.rmSync(notesDir, { recursive: true, force: true });
  fs.mkdirSync(notesDir, { recursive: true });

  for (const note of notes) {
    fs.writeFileSync(
      path.join(notesDir, note.fileName),
      note.content,
      "utf8"
    );
  }

  const links = notes
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title, "pt-BR"))
    .map(
      (note) =>
        `- [${escapeMarkdownLabel(note.title)}](./${note.fileName})`
    )
    .join("\n");

  const indexContent = `# Anotações

Notas publicadas dos meus estudos.

${links || "_Nenhuma nota está marcada para publicação no momento._"}
`;

  fs.writeFileSync(path.join(notesDir, "index.md"), indexContent, "utf8");

  console.log("Sincronização com VitePress concluída com sucesso!");
}

syncNotion().catch((error) => {
  console.error("ERRO:", error);
  process.exit(1);
});