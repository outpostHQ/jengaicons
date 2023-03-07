import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const LeafFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M20.565 11.764 7.714 24.614C2.188 14.052 10.911 3.802 28.884 4.859c1.058 17.974-9.192 26.697-19.756 21.171L21.98 13.178a1 1 0 0 0-1.415-1.414ZM7.707 24.622l-3.454 3.454a1 1 0 1 0 1.414 1.414l3.454-3.454-1.414-1.414Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

LeafFill.displayName = "LeafFill"

export default LeafFill
