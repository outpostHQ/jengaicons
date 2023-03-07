import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const MicrophoneStageFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M22.023 18.657a6.905 6.905 0 0 0 3.97-1.247l-9.66-9.66a6.905 6.905 0 0 0-1.247 3.97c0 .45.043.89.125 1.316L6.23 24.491l2.386 2.386 12.059-8.35c.436.085.886.13 1.347.13Zm-4.32-12.365 9.748 9.748a6.937 6.937 0 0 0-9.748-9.748Zm-2.497 12.245a1 1 0 0 1 0 1.414l-1.3 1.3a1 1 0 0 1-1.414-1.414l1.3-1.3a1 1 0 0 1 1.414 0Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

MicrophoneStageFill.displayName = "MicrophoneStageFill"

export default MicrophoneStageFill
