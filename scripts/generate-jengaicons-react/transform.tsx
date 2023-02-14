import * as svgson from 'svgson'
import prettier from 'prettier'
import { SVGProps } from 'react'
import { TVariants } from './types'

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
        transformAttr: (attr: SVGProp, attrVal, escape) => {
          let _attrVal = `"${escape(attrVal)}"`

          switch (attr) {
            // Replace Color
            case 'stroke':
            case 'fill':
              // check if the value is a hex color
              if (/^#.+/.test(attrVal))
                _attrVal = `{color || colorCtx || "${data.defaultColor}"}`
              break

            // Replace StrokeWidth for weight prop
            case 'strokeWidth':
              if (data.variant === 'Regular')
                _attrVal = `{weight || weightCtx || "${data.defaultWeight}"}`
              else _attrVal = `"${data.defaultWeight}"`
              break
          }

          return `${attr}=${_attrVal}`
        },
      })
    )
    .join('')
}

const getRegularComponent = (
  transformData: TransformData,
  svgAST: svgson.INode
) => {
  const { componentName, defaultSize, defaultWeight } = transformData

  return `
    import * as React from 'react'
    import { forwardRef, useContext } from 'react'
    import type { Context } from 'react'
    import { JengaIconContext } from '../../src/base'
    import type { JengaIconRegularProps } from '../../src/base'

    const ${componentName} =  forwardRef<SVGSVGElement, JengaIconRegularProps>(
      
            ( props, ref )=>{
              const { size, color, alt, children, mirrored, weight } = props;

                          
              const {
                alt: altCtx,
                children: childrenCtx,
                color: colorCtx,
                mirrored: mirroredCtx,
                size: sizeCtx,
                weight: weightCtx
              } = useContext(JengaIconContext as Context<JengaIconRegularProps>)


              return  <svg 
                       width={size || sizeCtx || ${defaultSize}}
                       height={size || sizeCtx || ${defaultSize}}
                       transform={mirrored || mirroredCtx ? 'scale(-1, 1)' : undefined}
                       strokeWidth={weight || weightCtx || ${defaultWeight}}
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
}

const getVariantComponent = (
  transformData: TransformData,
  svgAST: svgson.INode
) => {
  const { componentName, defaultSize } = transformData

  return `
    import * as React from 'react'
    import { forwardRef, useContext } from 'react'
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
                size: sizeCtx
              } = useContext(JengaIconContext)


              return  <svg 
                       width={size || sizeCtx || ${defaultSize}}
                       height={size || sizeCtx || ${defaultSize}}
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
}

const getComponent = (transformData: TransformData, svgAST: svgson.INode) => {
  switch (transformData.variant) {
    case 'Regular':
      return getRegularComponent(transformData, svgAST)
  }

  return getVariantComponent(transformData, svgAST)
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

  const svgAST = svgson.parseSync(svgContent)

  delete svgAST.attributes.width
  delete svgAST.attributes.height

  svgAST.attributes.viewBox = `0 0 ${defaultSize} ${defaultSize}`

  const ComponentFileContent = getComponent(transformData, svgAST)

  return prettier.format(ComponentFileContent, {
    semi: true,
    parser: 'babel-ts',
  })
}

export default transform
