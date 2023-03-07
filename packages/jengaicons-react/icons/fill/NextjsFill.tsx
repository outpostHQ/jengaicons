import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const NextjsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M21.099 27.55c-1.29.474-2.684.733-4.139.733-6.627 0-12-5.373-12-12s5.373-12 12-12c6.628 0 12 5.373 12 12 0 4.456-2.429 8.345-6.035 10.415L12.285 9.772a1.002 1.002 0 0 0-1.726.021.994.994 0 0 0-.131.513v12.31a1 1 0 1 0 2 0v-8.858l8.67 13.792ZM21.86 9.29a1 1 0 0 1 1 1v8.835a1 1 0 1 1-2 0v-8.835a1 1 0 0 1 1-1Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

NextjsFill.displayName = "NextjsFill"

export default NextjsFill
