import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Rug = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
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
        d='M7.692 7.27V4.5M13.231 7.27V4.5M24.308 7.27V4.5M7.692 28.5v-2.77M13.231 28.5v-2.77M18.77 7.27V4.5M18.77 28.5v-2.77M24.308 28.5v-2.77'
      />
      <rect
        width='16.615'
        height='18.462'
        x='7.692'
        y='7.269'
        stroke={color || colorCtx || "#000000"}
        strokeWidth={weight || weightCtx || "2"}
        rx='.5'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='m13.197 16.15 2.596-4.183a.1.1 0 0 1 .168-.004l2.837 4.183a.1.1 0 0 1 .003.108l-2.837 4.76a.1.1 0 0 1-.174-.004l-2.596-4.76a.1.1 0 0 1 .003-.1Z'
      />

      {children || childrenCtx}
    </svg>
  )
})

Rug.displayName = "Rug"

export default Rug
