import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const PawPrint = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d='M25.692 16.5a2.308 2.308 0 1 0 0-4.615 2.308 2.308 0 0 0 0 4.615ZM6.308 16.5a2.308 2.308 0 1 0 0-4.615 2.308 2.308 0 0 0 0 4.615ZM11.846 10.962a2.308 2.308 0 1 0 0-4.616 2.308 2.308 0 0 0 0 4.616ZM20.154 10.962a2.308 2.308 0 1 0 0-4.616 2.308 2.308 0 0 0 0 4.616ZM22.37 19.72a5.03 5.03 0 0 1-2.378-3v0a4.154 4.154 0 0 0-7.984 0 5.03 5.03 0 0 1-2.377 3 3.692 3.692 0 0 0 3.196 6.645 8.284 8.284 0 0 1 6.346 0 3.693 3.693 0 0 0 3.196-6.646Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

PawPrint.displayName = "PawPrint"

export default PawPrint
