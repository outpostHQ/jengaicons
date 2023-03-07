import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const OctagonFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M21.794 4.366a.54.54 0 0 1 .38.16l6.631 6.748c.1.103.156.24.155.383l-.083 9.46a.54.54 0 0 1-.16.38l-6.749 6.631a.539.539 0 0 1-.382.155l-9.46-.083a.54.54 0 0 1-.38-.16L5.115 21.29a.54.54 0 0 1-.155-.382l.083-9.46a.54.54 0 0 1 .16-.38l6.748-6.631a.54.54 0 0 1 .383-.155l9.46.083Z'
      />

      {children || childrenCtx}
    </svg>
  )
})

OctagonFill.displayName = "OctagonFill"

export default OctagonFill
