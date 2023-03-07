import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const NumberEight = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d='M20.882 10.583a4.433 4.433 0 0 1-1.43 3.241 5.11 5.11 0 0 1-6.904 0 4.389 4.389 0 0 1 0-6.482 5.11 5.11 0 0 1 6.904 0 4.435 4.435 0 0 1 1.43 3.241v0Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M21.77 20.583a5.24 5.24 0 0 1-1.69 3.83 6.038 6.038 0 0 1-8.16 0 5.187 5.187 0 0 1 0-7.66 6.038 6.038 0 0 1 8.16 0 5.24 5.24 0 0 1 1.69 3.83Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

NumberEight.displayName = "NumberEight"

export default NumberEight
