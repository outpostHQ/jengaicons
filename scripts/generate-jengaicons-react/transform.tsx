import * as svgson from "svgson"
import prettier from "prettier"
import { SVGProps } from "react"
import { TVariants } from "./types"
import prettierConfig from "../../.prettierrc.json"

type SVGProp = keyof SVGProps<SVGSVGElement>

const genAttrString = (attrs: Record<string, string>) => {
  return Object.entries(attrs)
    .map(([key, val]) => `${key}="${val}"`)
    .join(" ")
}

const genSVG = (childrenAST: svgson.INode[], data: TransformData) => {
  return childrenAST
    .map((val) =>
      svgson.stringify(val, {
        transformAttr: (attr: SVGProp, attrVal, escape) => {
          let _attrVal = `"${escape(attrVal)}"`

          switch (attr) {
            // Replace Color
            case "stroke":
            case "fill":
              // check if the value is a hex color
              if (/^#.+/.test(attrVal)) _attrVal = `{_color}`
              break

            // Replace StrokeWidth for weight prop
            case "strokeWidth":
              if (data.variant === "regular") _attrVal = `{_weight}`
              else _attrVal = `"${data.defaultWeight}"`
              break
          }

          return `${attr}=${_attrVal}`
        },
      }),
    )
    .join("")
}

const CommonSVGRootProps = `
{...props}
transform={(props.transform || "") + (mirrored || mirroredCtx ? " scale(-1, 1)" : "")}
style={{
  ...styleCtx,
  ...style,
  ...props.style,
}}
color={_color}
`

const getRegularComponent = (
  transformData: TransformData,
  svgAST: svgson.INode,
) => {
  const { componentName, defaultSize, defaultWeight, defaultColor } =
    transformData

  return `
    import * as React from 'react'
    import { forwardRef, useContext } from 'react'
    import { JengaIconContext } from '../context'
    
    import type { Context } from 'react'
    import type { JengaIconRegularProps } from '../types'

    const ${componentName} =  forwardRef<SVGSVGElement, JengaIconRegularProps>(

            ( props, ref )=>{
              const { size, color, alt, children, mirrored, weight, style } = props;


              const {
                alt: altCtx,
                children: childrenCtx,
                color: colorCtx,
                mirrored: mirroredCtx,
                size: sizeCtx,
                weight: weightCtx,
                style: styleCtx
              } = useContext(JengaIconContext as Context<JengaIconRegularProps>)

              const _size = size || sizeCtx || ${defaultSize}
              const _weight = weight || weightCtx || ${defaultWeight}
              const _color = color || colorCtx || "${defaultColor}"

              return  <svg
                       width={_size}
                       height={_size}
                       strokeWidth={weight || weightCtx || ${defaultWeight}}
                       ref={ref}
                       ${genAttrString(svgAST.attributes)}
                       ${CommonSVGRootProps}
                        >
                            {(!!altCtx || !!alt) ? <title>{alt || altCtx}</title> : null}

                            ${genSVG(svgAST.children, transformData)}

                            {children || childrenCtx}
                    </svg>
            }
    );

    ${componentName}.displayName = "${componentName}";

    export default ${componentName};
    `
}

const getFillComponent = (
  transformData: TransformData,
  svgAST: svgson.INode,
) => {
  const { componentName, defaultSize, defaultColor } = transformData

  return `
    import * as React from 'react'
    import { forwardRef, useContext } from 'react'
    import { JengaIconContext } from '../context'
    
    import type { Context } from 'react'
    import type { JengaIconFillProps } from '../types'   
    
    const ${componentName} =  forwardRef<SVGSVGElement, JengaIconFillProps>(

            ( props, ref )=>{
              const { size, color, alt, children, mirrored, style } = props;


              const {
                alt: altCtx,
                children: childrenCtx,
                color: colorCtx,
                mirrored: mirroredCtx,
                size: sizeCtx,
                style: styleCtx
              } = useContext(JengaIconContext)

              
              const _size = size || sizeCtx || ${defaultSize}
              const _color = color || colorCtx || "${defaultColor}"


              return  <svg
                       width={_size}
                       height={_size}
                       ref={ref}
                       ${genAttrString(svgAST.attributes)}
                       ${CommonSVGRootProps}
                        >
                            {(!!altCtx || !!alt) ? <title>{alt || altCtx}</title> : null}

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
    case "regular":
      return getRegularComponent(transformData, svgAST)
    case "fill":
      return getFillComponent(transformData, svgAST)
    default:
      throw new Error(`Invalid Variant : ${transformData.variant}`)
  }
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

  const ComponentFileContent = `"use client";\n${getComponent(
    transformData,
    svgAST,
  )}`

  return ComponentFileContent

  // @ts-expect-error
  return prettier.format(ComponentFileContent, {
    ...prettierConfig,
    parser: "babel-ts",
  })
}

export default transform
