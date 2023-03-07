import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const WallFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M5.96 7.283h10v5h-11v-4a1 1 0 0 1 1-1Zm17 5h-5v-5h10a1 1 0 0 1 1 1v4h-6Zm1 2h5v4h-5v-4Zm-1.007 6h6.007v4a1 1 0 0 1-1 1h-10v-5h4.993Zm-.993-2v-4h-10v4h10Zm-6 2h-11v4a1 1 0 0 0 1 1h10v-5Zm-11-2h5v-4h-5v4Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

WallFill.displayName = "WallFill"

export default WallFill
