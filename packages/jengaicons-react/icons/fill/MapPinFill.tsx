import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const MapPinFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M16.96 28.283s9.23-6.462 9.23-14.77a9.23 9.23 0 1 0-18.461 0c0 8.308 9.23 14.77 9.23 14.77Zm3.692-14.77a3.692 3.692 0 1 1-7.384 0 3.692 3.692 0 0 1 7.384 0Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

MapPinFill.displayName = "MapPinFill"

export default MapPinFill
