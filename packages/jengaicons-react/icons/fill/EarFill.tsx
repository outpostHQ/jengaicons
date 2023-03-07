import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const EarFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M11.14 8.194a8.23 8.23 0 0 1 14.05 5.82 1 1 0 0 0 2 0 10.23 10.23 0 1 0-20.461 0c0 1.723.277 2.989.742 3.989.466 1.002 1.088 1.663 1.635 2.2l.254.246c.439.424.764.738 1.024 1.159.278.449.499 1.061.499 2.098a6.077 6.077 0 0 0 10.764 3.868 1 1 0 0 0-1.542-1.273 4.078 4.078 0 0 1-7.222-2.595c0-1.357-.299-2.345-.8-3.152-.402-.65-.93-1.157-1.366-1.577a33.45 33.45 0 0 1-.211-.204c-.492-.48-.908-.94-1.221-1.614-.314-.675-.556-1.638-.556-3.145a8.23 8.23 0 0 1 2.41-5.82Zm5.82.204a5.616 5.616 0 0 0-5.615 5.616 1 1 0 1 0 2 0 3.615 3.615 0 0 1 7.23 0c0 .882-.442 1.303-1.266 2.01l-.051.044c-.79.676-1.913 1.637-1.913 3.484a3.308 3.308 0 0 0 6.615 0 1 1 0 1 0-2 0 1.308 1.308 0 0 1-2.615 0c0-.881.442-1.303 1.266-2.01l.052-.044c.79-.676 1.913-1.637 1.913-3.484a5.615 5.615 0 0 0-5.616-5.616Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

EarFill.displayName = "EarFill"

export default EarFill
