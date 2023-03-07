import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const HourglassSimpleMediumFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M7.71 4.783a1 1 0 0 1 1-1h16.5a1 1 0 0 1 1 1v2.54a11 11 0 0 1-4.81 9.095l-.537.365.537.365a11 11 0 0 1 4.81 9.094v2.541a1 1 0 0 1-1 1H8.71a1 1 0 0 1-1-1v-2.54a11 11 0 0 1 4.81-9.095l.537-.365-.537-.366a11 11 0 0 1-4.81-9.093V4.783Zm7.666 12.841-1.73 1.178a9 9 0 0 0-3.937 7.44v1.541h14.502v-1.54a9 9 0 0 0-3.937-7.441l-1.73-1.178a.98.98 0 0 1-.079-.056h-3.01a.98.98 0 0 1-.08.056Zm8.835-10.3c0 1.587-.42 3.12-1.183 4.459H10.892a8.997 8.997 0 0 1-1.183-4.46v-1.54h14.502v1.54Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

HourglassSimpleMediumFill.displayName = "HourglassSimpleMediumFill"

export default HourglassSimpleMediumFill
