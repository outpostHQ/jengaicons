import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const ListBulletsFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M9.364 9.605a1.252 1.252 0 1 1-2.504 0 1.252 1.252 0 0 1 2.504 0Zm3.34-1a1 1 0 1 0 0 2H26.06a1 1 0 1 0 0-2H12.703Zm0 6.678a1 1 0 1 0 0 2H26.06a1 1 0 0 0 0-2H12.704Zm-1 7.678a1 1 0 0 1 1-1H26.06a1 1 0 0 1 0 2H12.704a1 1 0 0 1-1-1Zm-3.592-5.426a1.252 1.252 0 1 0 0-2.504 1.252 1.252 0 0 0 0 2.504Zm1.252 5.426a1.252 1.252 0 1 1-2.504 0 1.252 1.252 0 0 1 2.504 0Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

ListBulletsFill.displayName = "ListBulletsFill"

export default ListBulletsFill
