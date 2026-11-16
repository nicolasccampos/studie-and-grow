const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const path = require("path");

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

async function syncNotion() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({ database_id: databaseId });
  
  // Salva dentro da pasta 'docs/notas' para o VitePress reconhecer
  const dir = path.join(__dirname, "docs", "notas");
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  for (const page of response.results) {
    const titleProp = Object.values(page.properties).find(prop => prop.type === 'title');
    let title = titleProp?.title[0]?.plain_text || "Sem-Titulo";
    
    const safeTitle = title.replace(/[^a-zA-Z0-9À-ÿ -]/g, "").replace(/\s+/g, "-");
    console.log(`Baixando: ${title}...`);

    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    // Adiciona o título como H1 no topo do arquivo Markdown
    const content = `# ${title}\n\n${mdString.parent || ""}`;

    const filePath = path.join(dir, `${safeTitle}.md`);
    fs.writeFileSync(filePath, content);
  }
  console.log("Sincronização com VitePress concluída!");
}

syncNotion().catch(console.error);