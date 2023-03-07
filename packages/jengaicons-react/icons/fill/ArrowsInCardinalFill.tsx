import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const ArrowsInCardinalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M16.75 20.283v8M12.507 24.526l4.243-4.243 4.242 4.242M12.507 8.04l4.243 4.243 4.242-4.243M16.75 4.283v8M20.75 15.835h8M24.992 11.593l-4.242 4.242 4.242 4.243M8.507 11.59l4.242 4.243-4.481 3.99M12.75 15.833h-8'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

ArrowsInCardinalFill.displayName = "ArrowsInCardinalFill"

export default ArrowsInCardinalFill
