const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const path = require("path");

const token = process.env.NOTION_TOKEN;
const databaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: token });
const n2m = new NotionToMarkdown({ notionClient: notion });

// Busca as páginas direto pela API do Notion (imune a erros de versão de biblioteca)
async function fetchDatabasePages() {
  const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Erro na API do Notion: ${JSON.stringify(data)}`);
  }

  return data.results;
}

async function syncNotion() {
  console.log("Conectando ao Notion e buscando páginas...");
  const pages = await fetchDatabasePages();
  console.log(`Encontradas ${pages.length} páginas no Notion.`);

  const dir = path.join(__dirname, "docs", "notas");
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  for (const page of pages) {
    const titleProp = Object.values(page.properties).find(prop => prop.type === 'title');
    let title = titleProp?.title[0]?.plain_text || "Sem-Titulo";
    
    const safeTitle = title.replace(/[^a-zA-Z0-9À-ÿ -]/g, "").replace(/\s+/g, "-");
    console.log(`Convertendo: ${title}...`);

    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    const content = `# ${title}\n\n${mdString.parent || ""}`;

    const filePath = path.join(dir, `${safeTitle}.md`);
    fs.writeFileSync(filePath, content);
  }
  console.log("Sincronização com VitePress concluída com sucesso!");
}

syncNotion().catch((err) => {
  console.error("ERRO:", err);
  process.exit(1);
});