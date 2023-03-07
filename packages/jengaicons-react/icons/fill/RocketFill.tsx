import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const RocketFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='m7.2 28.528 5.683-3.995h8.168v-.003l5.667 3.997a1 1 0 0 0 1.576-.817V20.72a1 1 0 0 0-.293-.707l-6.95-6.951v-1.784c-.08-3.819-2.188-6.26-3.569-7.266a.832.832 0 0 0-.94-.02c-3.124 1.993-3.754 5.64-3.665 7.286v1.776l-6.959 6.959a1 1 0 0 0-.293.707v6.991a1 1 0 0 0 1.576.818ZM21.05 15.89v6.193l5.244 3.7v-4.65l-5.243-5.243ZM7.626 25.785l5.252-3.694v-6.21l-5.252 5.252v4.652Zm7.17.925a1 1 0 0 0 0 2H18.6a1 1 0 1 0 0-2h-3.804Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

RocketFill.displayName = "RocketFill"

export default RocketFill
