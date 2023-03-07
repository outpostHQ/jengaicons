import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Lock = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
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
        fill={color || colorCtx || "#000000"}
        d='M16 22.552a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='M4.632 14.105h22.736V28H4.632V14.105Z'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeWidth={weight || weightCtx || "2"}
        d='M9.684 9a5 5 0 0 1 5-5h2.632a5 5 0 0 1 5 5v4.605a.5.5 0 0 1-.5.5H10.184a.5.5 0 0 1-.5-.5V9Z'
      />

      {children || childrenCtx}
    </svg>
  )
})

Lock.displayName = "Lock"

export default Lock
