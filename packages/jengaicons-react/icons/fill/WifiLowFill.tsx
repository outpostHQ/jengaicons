import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const WifiLowFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M13.562 15.648a4.92 4.92 0 0 1 6.796 0A1 1 0 1 0 21.74 14.2a6.92 6.92 0 0 0-9.56 0 1 1 0 1 0 1.382 1.447Zm4.798 3.233a1.4 1.4 0 1 1-2.798 0 1.4 1.4 0 0 1 2.798 0Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

WifiLowFill.displayName = "WifiLowFill"

export default WifiLowFill
