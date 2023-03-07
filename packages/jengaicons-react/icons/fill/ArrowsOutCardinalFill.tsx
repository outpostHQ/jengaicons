import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const ArrowsOutCardinalFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext)

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
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
          strokeWidth='2'
          d='M16.998 4.283v8M12.717 8.526l4.243-4.243 4.243 4.242M12.717 24.041l4.244 4.242 4.242-4.243M16.998 20.283v8M4.96 16.321h8M9.203 12.079 4.96 16.32l4.243 4.243M24.718 12.04l4.242 4.242-4.241 4.244M28.96 16.319h-8'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

ArrowsOutCardinalFill.displayName = "ArrowsOutCardinalFill"

export default ArrowsOutCardinalFill
