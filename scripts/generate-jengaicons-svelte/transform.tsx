import * as svgson from "svgson"
import { TVariants } from "./types"

// Attributes to remove (inherited from defaultAttributes or not needed)
const removeAttrs = [
  "stroke",
  "strokeWidth",
  "stroke-width",
  "stroke-linecap", // Already "round" in defaultAttributes
  "stroke-linejoin", // Already "round" in defaultAttributes
  "xmlns", // Already in defaultAttributes
]

// Attributes with default values that can be omitted
const defaultValues: Record<string, string> = {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
}

const cleanNode = (node: any): any => {
  if (node.attributes) {
    // Remove specified attributes
    for (const attr of removeAttrs) {
      delete node.attributes[attr]
    }
    // Remove attributes with default values
    for (const [attr, defaultVal] of Object.entries(defaultValues)) {
      if (node.attributes[attr] === defaultVal) {
        delete node.attributes[attr]
      }
    }
    // Remove empty fill attributes (will use color from Icon.svelte)
    if (node.attributes.fill === "none") {
      delete node.attributes.fill
    }
  }
  // Recursively clean children
  if (node.children) {
    node.children = node.children.map(cleanNode)
  }
  return node
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
  const { svgContent } = transformData

  const svgAST = cleanNode(svgson.parseSync(svgContent))

  // Build iconNode array with cleaned attributes
  const iconNode = svgAST.children.map((e: any) => [e.name, e.attributes])

  const ComponentFileContent = `<script>
  import Icon from '../icon.svelte';
  const iconNode = ${JSON.stringify(iconNode)};
  let { children, ...props } = $props();
</script>

<Icon name="${transformData.componentName}" {...props} {iconNode} {children} />`.trim()

  return { output: ComponentFileContent }
}

export default transform
