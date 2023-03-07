import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const TextboxFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M15.246 6.712a1 1 0 0 1 1 1v17.142a1 1 0 1 1-2 0v-2.571H5.96a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h8.286V7.712a1 1 0 0 1 1-1Zm-7.643 7.857a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-.5v2.857a1 1 0 1 1-2 0v-2.857h-.5a1 1 0 0 1-1-1Zm12.071-4.286h8.286a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8.286a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

TextboxFill.displayName = "TextboxFill"

export default TextboxFill
