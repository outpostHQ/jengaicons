import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const AirplaneTiltFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M26.87 6.427a2.955 2.955 0 0 0-4.18 0l-4.01 4.01a.043.043 0 0 1-.043.01L8.269 7.019a.5.5 0 0 0-.51.12L5.517 9.38a.5.5 0 0 0 .074.768l7.483 5.052a.5.5 0 0 1 .074.768l-2.075 2.075a.5.5 0 0 1-.354.146H8.12a.5.5 0 0 0-.354.147l-2.23 2.23a.5.5 0 0 0 .198.829l4.37 1.433a.5.5 0 0 1 .32.323l1.375 4.297a.5.5 0 0 0 .83.201l2.225-2.225a.5.5 0 0 0 .146-.354v-2.386a.5.5 0 0 1 .147-.354l2.182-2.182a.5.5 0 0 1 .768.074l5.052 7.483a.5.5 0 0 0 .768.074l2.24-2.24a.5.5 0 0 0 .122-.511L22.85 14.66a.043.043 0 0 1 .01-.044l4.01-4.01a2.956 2.956 0 0 0 0-4.18Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

AirplaneTiltFill.displayName = "AirplaneTiltFill"

export default AirplaneTiltFill
