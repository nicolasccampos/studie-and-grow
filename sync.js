const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const path = require("path");

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

async function syncNotion() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  // busca todas as páginas dentro do Database
  const response = await notion.databases.query({ database_id: databaseId });
  
  // cria a pasta notas se não existir
  const dir = path.join(__dirname, "notas");
  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }

  for (const page of response.results) {
    // descobre qual é a propriedade de titulo da página dinamicamente
    const titleProp = Object.values(page.properties).find(prop => prop.type === 'title');
    let title = titleProp?.title[0]?.plain_text || "Sem-Titulo";
    
    // limpa o título para virar um nome de arquivo válido 
    const safeTitle = title.replace(/[^a-zA-Z0-9À-ÿ -]/g, "").replace(/\s+/g, "-");
    
    console.log(`Baixando: ${title}...`);

    // converte os blocos do Notion para Markdown
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);

    // salva o arquivo na pasta notas
    const filePath = path.join(dir, `${safeTitle}.md`);
    fs.writeFileSync(filePath, mdString.parent || "");
  }
  console.log("Sincronização concluída!");
}

syncNotion().catch(console.error);