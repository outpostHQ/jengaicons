import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const GaugeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M5.394 16.764c1.319-4.759 5.495-8.33 10.566-8.748v3.652a1 1 0 1 0 2 0V8.015c5.07.419 9.247 3.99 10.566 8.748l-3.8 1.018a1 1 0 1 0 .517 1.932l3.654-.979c.042.408.063.822.063 1.24v3.105a1.51 1.51 0 0 1-1.51 1.51H15.386l7.424-9.674a1 1 0 1 0-1.587-1.217L12.866 24.59H6.47a1.51 1.51 0 0 1-1.51-1.51v-3.106c0-.418.021-.832.063-1.24l3.653.98a1 1 0 1 0 .518-1.933l-3.8-1.018Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

GaugeFill.displayName = "GaugeFill"

export default GaugeFill
