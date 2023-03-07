import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const VideoCameraFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M5.46 9.497a.5.5 0 0 0-.5.5v9.072a5 5 0 0 0 5 5h12.5a.5.5 0 0 0 .5-.5V17.85a.5.5 0 0 0 .232.416l5 3.172a.5.5 0 0 0 .768-.422v-8.468a.5.5 0 0 0-.768-.422l-5 3.171a.5.5 0 0 0-.232.417v-1.218a5 5 0 0 0-5-5H5.46Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

VideoCameraFill.displayName = "VideoCameraFill"

export default VideoCameraFill
