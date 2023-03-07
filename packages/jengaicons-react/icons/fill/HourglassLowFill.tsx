import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const HourglassLowFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M8.71 3.783a1 1 0 0 0-1 1v.812a11 11 0 0 0 4.4 8.8l3.183 2.388-3.183 2.388a11 11 0 0 0-4.4 8.8v.812a1 1 0 0 0 1 1h16.5a1 1 0 0 0 1-1v-.812a11 11 0 0 0-4.4-8.8l-3.183-2.388 3.184-2.388a11 11 0 0 0 4.4-8.8v-.812a1 1 0 0 0-1-1H8.709Zm4.6 9.012A9 9 0 0 1 9.71 5.783H24.21a9 9 0 0 1-3.599 7.012l-3.65 2.738-3.65-2.738Zm7.3 7.976a8.998 8.998 0 0 1 3.017 4.013H10.293a8.998 8.998 0 0 1 3.017-4.013l3.65-2.738 3.65 2.738Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

HourglassLowFill.displayName = "HourglassLowFill"

export default HourglassLowFill
