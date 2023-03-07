import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const LockSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d='M15.644 3.283a6 6 0 0 0-6 6v5.105H6.592a1 1 0 0 0-1 1v11.895a1 1 0 0 0 1 1h20.737a1 1 0 0 0 1-1V15.388a1 1 0 0 0-1-1h-3.053V9.283a6 6 0 0 0-6-6h-2.632Zm6.632 11.105V9.283a4 4 0 0 0-4-4h-2.632a4 4 0 0 0-4 4v5.105h10.632Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

LockSimpleFill.displayName = "LockSimpleFill"

export default LockSimpleFill
