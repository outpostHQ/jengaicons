import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const WindFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M5.133 12.034a1 1 0 0 1 1-1h9.68c.767 0 1.397-.629 1.397-1.405 0-.767-.623-1.39-1.382-1.39-.763 0-1.382.62-1.382 1.382v.032a1 1 0 0 1-2 0v-.032a3.382 3.382 0 0 1 3.382-3.382 3.389 3.389 0 0 1 3.382 3.39 3.404 3.404 0 0 1-3.397 3.405h-9.68a1 1 0 0 1-1-1Zm0 4.795a1 1 0 0 1 1-1H25.39c.767 0 1.397-.63 1.397-1.405 0-.768-.623-1.39-1.382-1.39-.763 0-1.382.619-1.382 1.382v.032a1 1 0 1 1-2 0v-.032a3.382 3.382 0 0 1 3.382-3.382 3.388 3.388 0 0 1 3.382 3.39 3.404 3.404 0 0 1-3.397 3.405H6.133a1 1 0 0 1-1-1Zm1 5.703a1 1 0 1 1 0-2h9.68a3.404 3.404 0 0 1 3.397 3.404c0 1.864-1.51 3.39-3.382 3.39a3.382 3.382 0 0 1-3.382-3.382v-.032a1 1 0 0 1 2 0v.032c0 .763.619 1.382 1.382 1.382.76 0 1.382-.622 1.382-1.39 0-.775-.63-1.404-1.397-1.404h-9.68Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

WindFill.displayName = "WindFill"

export default WindFill
