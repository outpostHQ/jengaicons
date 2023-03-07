import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const ListBullets = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>)

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M12.087 9.043H26M12.088 16H26M12.088 22.956H26'
        />
        <path
          fill={color || colorCtx || "#000000"}
          d='M7.304 10.348a1.304 1.304 0 1 0 0-2.609 1.304 1.304 0 0 0 0 2.609ZM7.304 17.304a1.304 1.304 0 1 0 0-2.608 1.304 1.304 0 0 0 0 2.608ZM7.304 24.26a1.304 1.304 0 1 0 0-2.608 1.304 1.304 0 0 0 0 2.609Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

ListBullets.displayName = "ListBullets"

export default ListBullets
