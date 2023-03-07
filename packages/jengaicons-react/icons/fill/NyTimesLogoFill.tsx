import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const NyTimesLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M22.568 20.111a1.532 1.532 0 1 0 0-3.063 1.532 1.532 0 0 0 0 3.063Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M26.862 20.54a10.213 10.213 0 1 1-9.91-12.683'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9.205 11.414a3.574 3.574 0 0 1 .352-7.131l14.807 7.148a3.574 3.574 0 1 0 0-7.148M6.823 19.386l10.128-5.402v14.297M12.867 16.163V27.43'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

NyTimesLogoFill.displayName = "NyTimesLogoFill"

export default NyTimesLogoFill
