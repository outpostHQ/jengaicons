import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Graph = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
  const { size, color, alt, children, mirrored, weight, style } = props

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
    style: styleCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>)

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
      ref={ref}
      style={{
        ...styleCtx,
        ...style,
      }}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 32 32'
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='M5.803 24.128a1.803 1.803 0 1 0 0-3.606 1.803 1.803 0 0 0 0 3.606ZM12.917 16.887a1.803 1.803 0 1 0 0-3.606 1.803 1.803 0 0 0 0 3.606ZM26.197 11.478a1.803 1.803 0 1 0 0-3.606 1.803 1.803 0 0 0 0 3.606ZM20.345 24.076a1.803 1.803 0 1 0 0-3.606 1.803 1.803 0 0 0 0 3.606ZM7.095 21.054l4.493-4.493m13.814-5.18-3.872 9.344m-7.27-4.275 4.603 4.604'
      />

      {children || childrenCtx}
    </svg>
  )
})

Graph.displayName = "Graph"

export default Graph
