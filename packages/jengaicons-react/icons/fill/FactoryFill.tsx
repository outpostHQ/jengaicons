import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const FactoryFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M25.889 26.569a.5.5 0 0 0 .5-.5v-7.572a.5.5 0 0 0-.5-.5h-7.254a.5.5 0 0 1-.403-.204l-3.078-4.194a.5.5 0 0 0-.871.12l-1.335 3.552a.5.5 0 0 1-.822.177l-3.74-3.74a.5.5 0 0 0-.854.353V26.07a.5.5 0 0 0 .5.5h17.857Zm-15.072-4.286a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm8.286-1a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z'
        clipRule='evenodd'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4.96 26.567h24M25.357 17.997 23.964 6.733a.902.902 0 0 0-.248-.526.687.687 0 0 0-.487-.21h-1.681a.687.687 0 0 0-.486.21.901.901 0 0 0-.249.526L18.7 17.998'
      />

      {children || childrenCtx}
    </svg>
  )
})

FactoryFill.displayName = "FactoryFill"

export default FactoryFill
