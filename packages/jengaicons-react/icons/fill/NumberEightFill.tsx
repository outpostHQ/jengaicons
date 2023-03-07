import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const NumberEightFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M21.841 10.866a4.435 4.435 0 0 1-1.43 3.241 5.109 5.109 0 0 1-6.903 0 4.387 4.387 0 0 1 0-6.482 5.11 5.11 0 0 1 6.904 0 4.433 4.433 0 0 1 1.43 3.241v0Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M22.729 20.866a5.24 5.24 0 0 1-1.69 3.83 6.038 6.038 0 0 1-8.159 0 5.186 5.186 0 0 1 0-7.66 6.038 6.038 0 0 1 8.16 0 5.24 5.24 0 0 1 1.689 3.83Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

NumberEightFill.displayName = "NumberEightFill"

export default NumberEightFill
