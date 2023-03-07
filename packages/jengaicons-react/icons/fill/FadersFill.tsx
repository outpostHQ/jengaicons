import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const FadersFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M25.96 4.783a1 1 0 0 1 1 1v15h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2h2v-15a1 1 0 0 1 1-1Zm-9 0a1 1 0 0 1 1 1v5h2a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2h2v-5a1 1 0 0 1 1-1Zm0 10a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0v-12a1 1 0 0 1 1-1Zm10 11a1 1 0 0 0-2 0v2a1 1 0 1 0 2 0v-2Zm-19-5a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm1-15a1 1 0 1 0-2 0v11h-2a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-2v-11Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

FadersFill.displayName = "FadersFill"

export default FadersFill
