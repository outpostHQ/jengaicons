import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const CookieFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M28.96 16.217a11.962 11.962 0 0 1-3.522 8.566c-4.618 4.61-12.163 4.662-16.841.113A12 12 0 0 1 17.032 4.29a1.002 1.002 0 0 1 .976 1.22 4 4 0 0 0 3.858 4.88 1.003 1.003 0 0 1 .995.994 4 4 0 0 0 4.878 3.858 1 1 0 0 1 1.22.974Zm-8.5 7.074a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-6.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-2.5-5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8 .5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

CookieFill.displayName = "CookieFill"

export default CookieFill
