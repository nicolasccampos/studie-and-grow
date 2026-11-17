import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

const notesDir = path.resolve(process.cwd(), 'docs/notas')

const noteItems = fs.existsSync(notesDir)
  ? fs.readdirSync(notesDir, { withFileTypes: true })
      .filter(
        (file) =>
          file.isFile() &&
          file.name.toLowerCase().endsWith('.md') &&
          file.name.toLowerCase() !== 'index.md'
      )
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
      .map((file) => {
        const slug = file.name.replace(/\.md$/i, '')
        return {
          text: slug.replace(/-/g, ' '),
          link: `/notas/${slug}`
        }
      })
  : []

export default defineConfig({
  base: '/studie-and-grow/',
  title: 'Estudos de Nicolas',
  description: 'Anotações dos meus estudos de desenvolvimento',

  themeConfig: {
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Anotações', link: '/notas/' }
    ],

    sidebar: {
      '/notas/': [
        {
          text: 'Estudos pessoais',
          items: [
            { text: 'Visão geral', link: '/notas/' },
            ...noteItems
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    }
  }
})