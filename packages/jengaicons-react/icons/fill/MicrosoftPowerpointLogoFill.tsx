import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const MicrosoftPowerpointLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M17.44 23.003v4.8M17.44 4.763v4.8M19.36 16.283h9.6M8.08 9.563a11.52 11.52 0 1 1 0 13.44'
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule='evenodd'
          d='M5.96 9.563a1 1 0 0 0-1 1v11.44a1 1 0 0 0 1 1h12.4a1 1 0 0 0 1-1v-11.44a1 1 0 0 0-1-1H5.96Zm4.3 2.678a1.02 1.02 0 0 0-1.02 1.019V19.325a1 1 0 1 0 2 0v-1.14h.92a2.92 2.92 0 0 0 2.92-2.92v-.052a2.972 2.972 0 0 0-2.972-2.972h-1.849Zm1.9 3.944h-.92v-1.944h.868c.537 0 .972.435.972.972v.052a.92.92 0 0 1-.92.92Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

MicrosoftPowerpointLogoFill.displayName = "MicrosoftPowerpointLogoFill"

export default MicrosoftPowerpointLogoFill
