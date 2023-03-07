import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Pizza = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
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
        d='M4.141 14.647a.91.91 0 0 1 .242-1.228 19.97 19.97 0 0 1 23.234 0 .91.91 0 0 1 .242 1.228L16.765 32.08a.907.907 0 0 1-1.53 0L4.14 14.647Z'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='M5.65 17.019a16.334 16.334 0 0 1 20.7 0M20.12 26.81a3.177 3.177 0 1 1 3.268-5.137M8.05 20.79a3.176 3.176 0 1 1 2.754 4.32'
      />

      {children || childrenCtx}
    </svg>
  )
})

Pizza.displayName = "Pizza"

export default Pizza
