import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const BrowsersFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M8.888 5.283a1 1 0 0 0-1 1v3H4.96a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20.073a1 1 0 0 0 1-1v-3h2.927a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1H8.888Zm17.145 16h1.927v-14H9.888v2h15.145a1 1 0 0 1 1 1v11Zm-20.073-10v3h18.073v-3H5.96Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

BrowsersFill.displayName = "BrowsersFill"

export default BrowsersFill
