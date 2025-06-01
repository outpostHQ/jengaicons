import * as svgson from "svgson"
import { TVariants } from "./types"

const removeAttrs = ["fill", "stroke", "strokeWidth", "stroke-width"]

const cleanNode = (node) => {
  // Remove specified attributes
  if (node.attributes) {
    for (const attr of removeAttrs) {
      delete node.attributes[attr]
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
  const { defaultSize, svgContent } = transformData

  const svgAST = cleanNode(svgson.parseSync(svgContent))

  const ComponentFileContent = `
  <script>
    import Icon from '../icon.svelte'
    const iconNode = ${JSON.stringify(svgAST.children.map((e) => [e.name, e.attributes]))}
  </script>


    <Icon  name="${transformData.componentName}" {...$$props} iconNode={iconNode}>
        <slot />
    </Icon>
  `.trim()

  return { output: ComponentFileContent }
}

export default transform
