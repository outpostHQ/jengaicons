// Verify every generated Svelte icon faithfully reproduces its source SVG.
//  - no blank icons (drawable geometry present)
//  - drawable geometry (path d / shape coords) matches the source exactly
//    (ignoring <defs>/<clipPath> no-op clips that we intentionally drop)
//  - per-icon viewBox matches the source width/height
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const OPT = path.join(ROOT, 'optimized')
const ICONS = path.join(ROOT, 'packages/jengaicons-svelte/src/icons')

// Collect a sorted multiset of drawable-geometry signatures from a raw SVG.
// Strips <defs>…</defs> (which hold only the no-op full-bounds clipPaths).
function geoFromSvg(svg) {
  const noDefs = svg.replace(/<defs>[\s\S]*?<\/defs>/g, '')
  const sigs = []
  // \bd avoids matching the `d="a"` substring inside id="a"/etc.
  for (const m of noDefs.matchAll(/\bd="([^"]*)"/g)) sigs.push('d|' + m[1])
  for (const m of noDefs.matchAll(/<rect\b([^>]*)>/g)) sigs.push('rect|' + norm(m[1]))
  for (const m of noDefs.matchAll(/<circle\b([^>]*)>/g)) sigs.push('circle|' + norm(m[1]))
  for (const m of noDefs.matchAll(/<ellipse\b([^>]*)>/g)) sigs.push('ellipse|' + norm(m[1]))
  for (const m of noDefs.matchAll(/<line\b([^>]*)>/g)) sigs.push('line|' + norm(m[1]))
  for (const m of noDefs.matchAll(/points="([^"]*)"/g)) sigs.push('points|' + m[1])
  return sigs.sort()
}

// Geometry signatures from a generated icon's iconNode (recursive walk).
function geoFromIconNode(nodes) {
  const sigs = []
  const walk = (n) => {
    const [tag, attrs = {}, kids] = n
    if (tag === 'path' && attrs.d != null) sigs.push('d|' + attrs.d)
    else if (tag === 'rect') sigs.push('rect|' + rectSig(attrs))
    else if (tag === 'circle') sigs.push('circle|' + circleSig(attrs))
    else if (tag === 'ellipse') sigs.push('ellipse|' + ellipseSig(attrs))
    else if (tag === 'line') sigs.push('line|' + lineSig(attrs))
    else if ((tag === 'polygon' || tag === 'polyline') && attrs.points != null)
      sigs.push('points|' + attrs.points)
    if (Array.isArray(kids)) kids.forEach(walk)
  }
  nodes.forEach(walk)
  return sigs.sort()
}

// Normalize a raw attribute string into a stable key (only geometry attrs).
const GEO_ATTRS = ['x', 'y', 'width', 'height', 'rx', 'ry', 'cx', 'cy', 'r', 'x1', 'y1', 'x2', 'y2']
function norm(attrStr) {
  const o = {}
  for (const m of attrStr.matchAll(/([a-zA-Z0-9:-]+)="([^"]*)"/g)) o[m[1]] = m[2]
  return GEO_ATTRS.filter((k) => o[k] != null).map((k) => `${k}=${o[k]}`).sort().join(',')
}
const pick = (attrs, keys) => keys.filter((k) => attrs[k] != null).map((k) => `${k}=${attrs[k]}`).sort().join(',')
const rectSig = (a) => pick(a, ['x', 'y', 'width', 'height', 'rx', 'ry'])
const circleSig = (a) => pick(a, ['cx', 'cy', 'r'])
const ellipseSig = (a) => pick(a, ['cx', 'cy', 'rx', 'ry'])
const lineSig = (a) => pick(a, ['x1', 'y1', 'x2', 'y2'])

function parseIconNode(svelteSrc) {
  const m = svelteSrc.match(/const iconNode = (\[[\s\S]*?\]);/)
  if (!m) throw new Error('no iconNode')
  return JSON.parse(m[1])
}
function getViewBox(svelteSrc) {
  const m = svelteSrc.match(/viewBox="([^"]*)"/)
  return m ? m[1] : null
}
function svgDims(svg) {
  const w = svg.match(/<svg[^>]*\bwidth="([0-9.]+)"/)
  const h = svg.match(/<svg[^>]*\bheight="([0-9.]+)"/)
  return { w: w && w[1], h: h && h[1] }
}

const fails = []
let checked = 0,
  blanks = 0,
  vbFixed = 0

for (const variant of ['regular', 'fill', 'mono']) {
  const dir = path.join(OPT, variant)
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.svg'))) {
    const name = file.replace(/\.svg$/, '')
    const svg = fs.readFileSync(path.join(dir, file), 'utf8')
    const sveltePath = path.join(ICONS, `${name}.svelte`)
    if (!fs.existsSync(sveltePath)) {
      fails.push(`${name}: MISSING generated component`)
      continue
    }
    const src = fs.readFileSync(sveltePath, 'utf8')
    checked++

    let iconNode
    try {
      iconNode = parseIconNode(src)
    } catch (e) {
      fails.push(`${name}: ${e.message}`)
      continue
    }

    const srcGeo = geoFromSvg(svg)
    const genGeo = geoFromIconNode(iconNode)

    if (genGeo.length === 0) {
      blanks++
      fails.push(`${name}: BLANK (no drawable geometry)`)
    }
    if (srcGeo.join('\n') !== genGeo.join('\n')) {
      const missing = srcGeo.filter((s) => !genGeo.includes(s))
      const extra = genGeo.filter((s) => !srcGeo.includes(s))
      fails.push(
        `${name}: GEOMETRY MISMATCH (src ${srcGeo.length}, gen ${genGeo.length})` +
          (missing.length ? `\n   missing: ${missing.slice(0, 2).map((s) => s.slice(0, 60)).join(' | ')}` : '') +
          (extra.length ? `\n   extra:   ${extra.slice(0, 2).map((s) => s.slice(0, 60)).join(' | ')}` : ''),
      )
    }

    const { w, h } = svgDims(svg)
    const expectVb = w && h ? `0 0 ${w} ${h}` : '0 0 32 32'
    const gotVb = getViewBox(src)
    if (gotVb !== expectVb) fails.push(`${name}: VIEWBOX ${gotVb} != expected ${expectVb}`)
    if (gotVb !== '0 0 32 32') vbFixed++
  }
}

console.log(`Checked: ${checked} icons`)
console.log(`Non-32 viewBoxes (previously cropped): ${vbFixed}`)
console.log(`Blank icons: ${blanks}`)
console.log(`Failures: ${fails.length}`)
if (fails.length) {
  console.log('\n--- FAILURES (first 40) ---')
  console.log(fails.slice(0, 40).join('\n'))
  process.exit(1)
} else {
  console.log('\n✓ ALL ICONS VERIFIED: geometry matches source, no blanks, viewBox correct.')
}
