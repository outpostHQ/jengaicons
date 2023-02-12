import * as svgson from 'svgson'
import prettier from 'prettier'
import { SVGProps } from 'react'

type SVGProp = keyof SVGProps<SVGSVGElement>

const genAttrString = (attrs: Record<string, string>) => {
  return Object.entries(attrs)
    .map(([key, val]) => `${key}="${val}"`)
    .join(' ')
}

const genSVG = (childrenAST: svgson.INode[], data: TransformData) => {
  return childrenAST
    .map((val) =>
      svgson.stringify(val, {
        transformAttr: (attr, val, escape) => {
          return replaceColor(
            attr as SVGProp,
            escape(val),
            `{color || colorCtx || "${data.defaultColor}"}`
          )
        },
      })
    )
    .join('')
}

const replaceColor = (
  attrName: SVGProp,
  attrVal: string,
  replaceWith: string
) => {
  let _attrVal = `"${attrVal}"`

  switch (attrName) {
    case 'stroke':
    case 'fill':
      // check if the value is a hex color
      if (attrVal.match(/^#.+/)) _attrVal = replaceWith
  }

  return `${attrName}=${_attrVal}`
}

interface TransformData {
  componentName: string
  defaultSize: number
  defaultColor: string
  svgContent: string
}

const transform = (transformData: TransformData) => {
  const { componentName, defaultSize, svgContent } = transformData

  const svgAST = svgson.parseSync(svgContent)

  delete svgAST.attributes.width
  delete svgAST.attributes.height

  svgAST.attributes.viewBox = `0 0 ${defaultSize} ${defaultSize}`

  const ComponentFileContent = `
    import * as React from 'react'
    import { forwardRef, useContext } from 'react'
    import type { SVGSVGElement } from 'react'
    import { JengaIconContext } from '../../src/base'
    import type { JengaIconProps } from '../../src/base'

    const ${componentName} =  forwardRef<SVGSVGElement, JengaIconProps>(
      
            ( props, ref )=>{
              const { size, color, alt, children, mirrored } = props;

                          
              const {
                alt: altCtx,
                children: childrenCtx,
                color: colorCtx,
                mirrored: mirroredCtx,
                size: sizeCtx,
              } = useContext(JengaIconContext)


              return  <svg 
                       width={size || sizeCtx || 32}
                       height={size || sizeCtx || 32}
                       transform={mirrored || mirroredCtx ? 'scale(-1, 1)' : undefined}
                       ref={ref} 
                       ${genAttrString(svgAST.attributes)} 
                        >
                            {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}
   
                            ${genSVG(svgAST.children, transformData)}
                            
                            {children || childrenCtx}
                    </svg>
            }
    );

    ${componentName}.displayName = "${componentName}";

    export default ${componentName};
    `

  return prettier.format(ComponentFileContent, {
    semi: true,
    parser: 'babel-ts',
  })
}

export default transform
