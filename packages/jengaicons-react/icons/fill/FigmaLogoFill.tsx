import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const FigmaLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M20.96 20.283a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
        />
        <path
          fill={color || colorCtx || "#000000"}
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M16.96 12.283v-8h-4a4 4 0 0 0 0 8h4ZM16.96 20.283v-8h-4a4 4 0 0 0 0 8h4Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M16.96 12.283v-8h4a4 4 0 0 1 0 8h-4Z'
        />
        <path
          fill={color || colorCtx || "#000000"}
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M16.96 20.283v4a3.999 3.999 0 0 1-7.923.78 4 4 0 0 1 3.923-4.78h4Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

FigmaLogoFill.displayName = "FigmaLogoFill"

export default FigmaLogoFill
