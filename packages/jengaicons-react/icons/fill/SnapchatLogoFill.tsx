import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const SnapchatLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4.96 23.183s5.862-2.71 5.862-11.912a6.138 6.138 0 1 1 12.276 0c0 9.201 5.862 11.912 5.862 11.912-1.015.953-3.171.372-4.4 1.048-1.21.666-1.87 2.804-3.24 3.154-1.325.339-2.93-1.207-4.36-1.207-1.43 0-3.035 1.546-4.36 1.207-1.37-.35-2.03-2.488-3.24-3.154-1.229-.676-3.386-.095-4.4-1.048Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='m23.682 15.948 2.924-1.17M10.238 15.948l-2.924-1.17'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

SnapchatLogoFill.displayName = "SnapchatLogoFill"

export default SnapchatLogoFill
