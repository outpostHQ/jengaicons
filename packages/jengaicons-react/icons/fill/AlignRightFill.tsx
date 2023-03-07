import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const AlignRightFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M28.96 4.283v24'
        />
        <rect
          width='7.318'
          height='19.826'
          fill={color || colorCtx || "#000000"}
          rx='1'
          transform='matrix(0 -1 -1 0 24.785 25.693)'
        />
        <rect
          width='7.318'
          height='14.608'
          fill={color || colorCtx || "#000000"}
          rx='1'
          transform='matrix(0 -1 -1 0 24.785 14.193)'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

AlignRightFill.displayName = "AlignRightFill"

export default AlignRightFill
