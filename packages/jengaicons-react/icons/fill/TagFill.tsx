import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const TagFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M17.437 28.139 5.106 15.808a.498.498 0 0 1-.138-.44l1.634-9.2a.498.498 0 0 1 .41-.405l9.036-1.475a.498.498 0 0 1 .432.14L28.814 16.76a.498.498 0 0 1 0 .704L18.141 28.14a.498.498 0 0 1-.704 0ZM12.835 9.233a1.36 1.36 0 1 1-2.72 0 1.36 1.36 0 0 1 2.72 0Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

TagFill.displayName = "TagFill"

export default TagFill
