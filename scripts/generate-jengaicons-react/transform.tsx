import * as svgson from 'svgson'
import prettier from 'prettier'

const genAttrString = (attrs: Record<string, string>) => {
  return Object.entries(attrs)
    .map(([key, val]) => `${key}="${val}"`)
    .join(' ')
}

const genSVG = (childrenAST: svgson.INode[]) => {
  return childrenAST.map((val) => svgson.stringify(val)).join('')
}

interface TransformData {
  componentName: string
  defaultSize: number
  svgContent: string
}

const transform = ({
  componentName,
  defaultSize,
  svgContent,
}: TransformData) => {
  const svgAST = svgson.parseSync(svgContent)

  delete svgAST.attributes.width
  delete svgAST.attributes.height

  svgAST.attributes.viewBox = `0 0 ${defaultSize} ${defaultSize}`

  const ComponentFileContent = `
    import * as React from 'react'
    import { forwardRef } from 'react'
    import type { SVGSVGElement } from 'react'
    import type { JengaIconProps } from '../../src/base'


    const ${componentName} =  forwardRef<SVGSVGElement, JengaIconProps>(( props, ref )=>{
        const { size = ${defaultSize}} = props;

        return  <svg style={{width: size, height: size}} ref={ref} ${genAttrString(
          svgAST.attributes
        )} {...props}>${genSVG(svgAST.children)}</svg>
    });

    ${componentName}.displayName = "${componentName}";

    export default ${componentName};
    `

  return prettier.format(ComponentFileContent, {
    semi: true,
    parser: 'babel-ts',
  })
}

export default transform
