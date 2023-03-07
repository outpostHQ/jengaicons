import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const KeyboardFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M5.96 7.975a1 1 0 0 0-1 1v14.616a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V8.975a1 1 0 0 0-1-1h-22Zm2.692 3.616a1 1 0 1 0 0 2h16.616a1 1 0 1 0 0-2H8.652Zm0 3.692a1 1 0 1 0 0 2h16.616a1 1 0 1 0 0-2H8.652Zm-1 4.692a1 1 0 0 1 1-1h.923a1 1 0 1 1 0 2h-.923a1 1 0 0 1-1-1Zm5.616-1a1 1 0 1 0 0 2h7.384a1 1 0 1 0 0-2h-7.384Zm10.077 1a1 1 0 0 1 1-1h.923a1 1 0 1 1 0 2h-.923a1 1 0 0 1-1-1Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

KeyboardFill.displayName = "KeyboardFill"

export default KeyboardFill
