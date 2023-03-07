import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const BugBeetle = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d='M24.457 17.865H28M4 17.865h3.543M4 21.865h3.806M4 13.865h24M16 17.865v9.138M24.194 21.865H28M7.806 4.997l3 3M24.232 4.997l-3 3'
        />
        <rect
          width='16.388'
          height='20.276'
          x='7.806'
          y='6.727'
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          rx='8.194'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

BugBeetle.displayName = "BugBeetle"

export default BugBeetle
