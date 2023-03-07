import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const SidebarPlayfulFill = forwardRef<SVGSVGElement, JengaIconProps>(
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

        <rect
          width='5.165'
          height='5.165'
          x='15.683'
          y='14.724'
          fill={color || colorCtx || "#000000"}
          rx='.5'
          transform='rotate(-60 15.683 14.724)'
        />
        <path
          fill={color || colorCtx || "#000000"}
          d='M23.948 19.191a.5.5 0 0 1 .837-.224l4.845 4.846a.5.5 0 0 1-.224.837l-6.62 1.773a.5.5 0 0 1-.612-.612l1.774-6.62Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M28.96 19.073V6.283h-24v20h15.17M12 6.5v19.784'
        />
        <path
          fill={color || colorCtx || "#000000"}
          d='M4.96 6.392H12v20H4.96z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

SidebarPlayfulFill.displayName = "SidebarPlayfulFill"

export default SidebarPlayfulFill
