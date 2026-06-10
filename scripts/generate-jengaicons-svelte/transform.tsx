import * as svgson from "svgson"
import { TVariants } from "./types"

// Attributes stripped from *visible* shape elements. These are re-applied by
// Icon.svelte (stroke/stroke-width come from the `color`/`strokeWidth` props,
// xmlns lives on the root, clip-path here is a no-op full-bounds clip).
const removeAttrs = [
  "stroke",
  "strokeWidth",
  "stroke-width",
  "stroke-linecap", // Already "round" in defaultAttributes
  "stroke-linejoin", // Already "round" in defaultAttributes
  "xmlns", // Already in defaultAttributes
  "clip-path", // no-op full-bounds clip (see DROP_TAGS below)
]

// Presentation attributes that inherit from a <g> down to its children.
// When we unwrap a group we push these onto the children (child value wins).
const inheritableAttrs = [
  "fill",
  "stroke",
  "fill-rule",
  "clip-rule",
  "stroke-width",
  "stroke-linecap",
  "stroke-linejoin",
  "opacity",
  "fill-opacity",
  "stroke-opacity",
]

// Elements whose subtree *defines* (not draws) graphics. Their contents must be
// preserved verbatim — no color/stroke remapping — so masks/gradients keep
// working. <defs>/<clipPath> are dropped entirely because every clip in the
// icon set is a no-op full-bounds rectangle.
const DEF_TAGS = new Set([
  "mask",
  "linearGradient",
  "radialGradient",
  "pattern",
  "filter",
  "symbol",
])
const DROP_TAGS = new Set(["defs", "clipPath"])

const cleanVisibleAttrs = (attrs: Record<string, any>) => {
  const out: Record<string, any> = { ...attrs }
  // Masked elements draw an inner stroke (e.g. stroke-width="4" clipped to the
  // shape's own fill via mask). Their exact stroke geometry must be preserved —
  // only the stroke *colour* is remapped later by Icon.svelte. For everything
  // else, strip stroke attrs so the icon honours the strokeWidth/color props.
  const strip = out.mask != null ? ["xmlns", "clip-path"] : removeAttrs
  for (const attr of strip) delete out[attr]
  // Empty fills inherit "none" from the root <svg>.
  if (out.fill === "none") delete out.fill
  return out
}

type IconNode =
  | [string, Record<string, any>]
  | [string, Record<string, any>, IconNode[]]

/**
 * Recursively flatten an SVG node into a render tree:
 *  - <g> is unwrapped, its inheritable attrs pushed onto children
 *  - <defs>/<clipPath> (no-op clips) are dropped
 *  - <mask>/gradients are kept verbatim (definition subtree)
 *  - everything else becomes a drawable [tag, attrs, children?] tuple
 */
const flattenNode = (
  node: any,
  inherited: Record<string, any>,
  insideDef: boolean,
): IconNode[] => {
  const tag: string = node.name
  if (DROP_TAGS.has(tag)) return []

  const attrs: Record<string, any> = node.attributes || {}
  const children: any[] = node.children || []

  if (tag === "g") {
    // Unwrap: merge this group's inheritable attrs into what we pass down.
    const passDown = { ...inherited }
    for (const key of inheritableAttrs) {
      if (attrs[key] != null) passDown[key] = attrs[key]
    }
    return children.flatMap((child) => flattenNode(child, passDown, insideDef))
  }

  const isDef = insideDef || DEF_TAGS.has(tag)
  // Apply inherited group attrs (the element's own value always wins).
  const merged = { ...inherited, ...attrs }
  const finalAttrs = isDef ? merged : cleanVisibleAttrs(merged)

  // Children inherit through normal SVG rules now that attrs sit on this node.
  const childNodes = children.flatMap((child) => flattenNode(child, {}, isDef))

  return [childNodes.length ? [tag, finalAttrs, childNodes] : [tag, finalAttrs]]
}

interface TransformData {
  componentName: string
  defaultSize: number
  defaultColor: string
  defaultWeight: string
  svgContent: string
  variant: TVariants
}

const transform = (transformData: TransformData) => {
  const { componentName } = transformData

  // Namespace any ids (and their url(#id) references) so that inlining many
  // icons on one page can't collide (e.g. every masked logo uses id="a").
  const svgContent = transformData.svgContent
    .replace(/id="([^"]+)"/g, (_m, id) => `id="${componentName}_${id}"`)
    .replace(/url\(#([^)]+)\)/g, (_m, id) => `url(#${componentName}_${id})`)

  const svgAST = svgson.parseSync(svgContent)

  // Source SVGs carry no viewBox, only per-icon width/height. Reconstruct it so
  // icons designed at 33x32, 33x33, 35x35, … are not cropped/misaligned.
  const rootWidth = svgAST.attributes?.width
  const rootHeight = svgAST.attributes?.height
  const viewBox =
    svgAST.attributes?.viewBox ||
    (rootWidth && rootHeight ? `0 0 ${rootWidth} ${rootHeight}` : "0 0 32 32")

  const iconNode = (svgAST.children || []).flatMap((child: any) =>
    flattenNode(child, {}, false),
  )

  const ComponentFileContent = `<script>
  import Icon from '../icon.svelte';
  const iconNode = ${JSON.stringify(iconNode)};
  let { children, ...props } = $props();
</script>

<Icon name="${componentName}" viewBox="${viewBox}" {...props} {iconNode} {children} />`.trim()

  return { output: ComponentFileContent }
}

export default transform
