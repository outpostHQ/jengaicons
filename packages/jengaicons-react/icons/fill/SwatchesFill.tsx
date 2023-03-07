import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const SwatchesFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M13.079 6.293a1 1 0 0 0-1-1H5.96a1 1 0 0 0-1 1v18.94a4.06 4.06 0 0 0 4.346 4.05H28.96a1 1 0 0 0 1-1v-8.119a1 1 0 0 0-1-1h-4.594l3.834-2.78a1 1 0 0 0 .222-1.398l-4.767-6.571a1 1 0 0 0-1.397-.222l-9.18 6.658V6.293Zm0 11.03v7.558l13.137-9.53-3.593-4.952-9.544 6.923Zm.095 9.96H27.96v-6.119h-6.351l-8.435 6.119Zm-2.612-2.617a1.542 1.542 0 1 1-3.085 0 1.542 1.542 0 0 1 3.085 0Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

SwatchesFill.displayName = "SwatchesFill"

export default SwatchesFill
