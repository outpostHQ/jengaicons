import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const DesktopTower = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>)

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          strokeWidth={weight || weightCtx || "2"}
          d='M14.286 25.428H9.143M24.571 10h-3.428M24.571 13.428h-3.428M27.143 6.571H18.57a.857.857 0 0 0-.857.858V24.57c0 .474.384.858.857.858h8.572A.857.857 0 0 0 28 24.57V7.43a.857.857 0 0 0-.857-.858ZM11.714 22v3.429'
        />
        <path
          fill={color || colorCtx || "#000000"}
          d='M22.857 22.857a1.286 1.286 0 1 0 0-2.571 1.286 1.286 0 0 0 0 2.571Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M15.143 10.857H4V22h11.143'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

DesktopTower.displayName = "DesktopTower"

export default DesktopTower
