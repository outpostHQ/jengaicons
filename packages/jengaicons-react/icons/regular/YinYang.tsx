import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const YinYang = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
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
          d='M15.96 28.283c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12s-12 5.372-12 12c0 6.627 5.373 12 12 12Z'
        />
        <path
          fill={color || colorCtx || "#000000"}
          d='M15.96 23.783a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15.96 11.783a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15.96 3.283a1 1 0 1 0 0 2v-2Zm5 7a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7h-2Zm-5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm13 11c0-7.18-5.82-13-13-13v2c6.075 0 11 4.925 11 11h2Zm-13 13c7.18 0 13-5.82 13-13h-2c0 6.075-4.925 11-11 11v2Zm-7-7a7 7 0 0 0 7 7v-2a5 5 0 0 1-5-5h-2Zm7-7a7 7 0 0 0-7 7h2a5 5 0 0 1 5-5v-2Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

YinYang.displayName = "YinYang"

export default YinYang
