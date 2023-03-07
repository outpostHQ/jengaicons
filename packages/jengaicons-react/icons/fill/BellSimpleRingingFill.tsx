import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const BellSimpleRingingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M24.145 3.437a1 1 0 0 0-1.067 1.692 11.535 11.535 0 0 1 4.187 4.65 1 1 0 0 0 1.793-.885 13.536 13.536 0 0 0-4.913-5.457ZM13.12 27.283a1 1 0 0 0 0 2h7.68a1 1 0 1 0 0-2h-7.68ZM11.154 3.749a1 1 0 0 1-.312 1.38 11.535 11.535 0 0 0-4.187 4.65 1 1 0 0 1-1.793-.885 13.535 13.535 0 0 1 4.913-5.457 1 1 0 0 1 1.38.312ZM7.052 22.752c-.218.341.027.801.432.801h18.952c.405 0 .65-.46.432-.801-.749-1.175-2.056-3.408-2.35-5.084a10.862 10.862 0 0 1-.117-2.491c.278-4.738-2.695-9.933-7.441-9.933s-7.719 5.195-7.441 9.933c.05.855.02 1.697-.118 2.491-.293 1.676-1.6 3.909-2.349 5.084Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

BellSimpleRingingFill.displayName = "BellSimpleRingingFill"

export default BellSimpleRingingFill
