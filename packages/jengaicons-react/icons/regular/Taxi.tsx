import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Taxi = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
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
        d='M4 16.475h24'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='M5.714 16.423h20.572v6.624H5.714v-6.624Z'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='M9.915 8.475h12.17l4.6 7.948H5.315l4.6-7.948ZM13.87 4.667h4.26l1.61 3.808h-7.48l1.61-3.808Z'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='M5.714 23.047v4.285h4.714v-4.285M21.571 23.047v4.285h4.715v-4.285M9 19.735h2M21 19.735h2'
      />

      {children || childrenCtx}
    </svg>
  )
})

Taxi.displayName = "Taxi"

export default Taxi
