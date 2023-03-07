import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Binoculars = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d='M13.23 12.316h5.54M8.615 25.701a4.615 4.615 0 1 0 0-9.23 4.615 4.615 0 0 0 0 9.23ZM23.385 25.701a4.615 4.615 0 1 0 0-9.23 4.615 4.615 0 0 0 0 9.23Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M4.658 18.704 9.272 7.747c1.515-.633 2.388-.561 3.962 0l-.067 12.574M27.345 18.704 22.731 7.747c-1.515-.633-2.388-.561-3.962 0l.067 12.574'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

Binoculars.displayName = "Binoculars"

export default Binoculars
