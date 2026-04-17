import fs from 'fs'
import path from 'path'

const blogDir = path.join(process.cwd(), 'data/blog')
const skip = new Set(['.pdf', '.typ', '.png', '.jpg', '.jpeg', '.gif', '.webp'])

let bad = []
for (const name of fs.readdirSync(blogDir)) {
  const ext = path.extname(name).toLowerCase()
  if (skip.has(ext)) continue
  if (name.endsWith('.md') && !name.endsWith('.mdx')) {
    bad.push(name)
  }
}

if (bad.length) {
  console.error(
    'Contentlayer Blog 只匹配 *.mdx；以下 .md 会被跳过并导致 Vercel 警告或漏文：\n',
    bad.join('\n  ')
  )
  process.exit(1)
}

console.log('data/blog: 无裸 .md 文章（Contentlayer 与 Vercel 一致）')
