import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const MessengerLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M5.17 14.046a12 12 0 0 0 1.47 8.36l-1.185 4.146a1 1 0 0 0 1.236 1.236l4.147-1.184A12 12 0 1 0 5.17 14.046Zm10.501-.476a1 1 0 0 0-1.414 0l-4.002 4.002a1 1 0 1 0 1.414 1.414l3.295-3.295 3.295 3.295a1 1 0 0 0 1.414 0l4.002-4.002a1 1 0 0 0-1.415-1.414l-3.294 3.295-3.295-3.295Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

MessengerLogoFill.displayName = "MessengerLogoFill"

export default MessengerLogoFill
