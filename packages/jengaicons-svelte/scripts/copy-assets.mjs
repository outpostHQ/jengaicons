import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.join(__dirname, '../src')
const distDir = path.join(__dirname, '../dist')

function copyAssets(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  const entries = fs.readdirSync(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      if (entry.name === 'icons') continue
      copyAssets(srcPath, destPath)
    } else if (
      entry.name.endsWith('.svelte') ||
      entry.name.endsWith('.d.ts') ||
      entry.name.endsWith('.js')
    ) {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

copyAssets(srcDir, distDir)
console.log('Copied .svelte, .d.ts, and .js files to dist')
