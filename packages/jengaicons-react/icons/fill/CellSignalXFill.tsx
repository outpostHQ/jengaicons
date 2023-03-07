import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const CellSignalXFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || colorCtx || "#000000"}
          fillRule='evenodd'
          d='M6.167 26.95h19.626a.5.5 0 0 0 .5-.5V19.11l-1.252 1.253a2 2 0 0 1-2.829-2.829l1.253-1.252-1.252-1.253a2 2 0 0 1 2.828-2.828l1.252 1.252v-6.63a.5.5 0 0 0-.853-.354L5.814 26.096a.5.5 0 0 0 .353.854Z'
          clipRule='evenodd'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='m28.96 13.616-5.333 5.334M28.96 18.95l-5.333-5.334'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

CellSignalXFill.displayName = "CellSignalXFill"

export default CellSignalXFill
