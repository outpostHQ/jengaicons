import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Needle = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d='m22.712 9.769-2.043 2.043M4.166 28.5c8.121-7.656 11.716-15.433 12.508-18.392a.096.096 0 0 1 .026-.043l2.76-2.768a3.946 3.946 0 0 1 5.584-.003v0a3.946 3.946 0 0 1 0 5.58l-3.087 3.087a.099.099 0 0 1-.056.028c-5.295.754-14.025 8.65-17.735 12.511Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

Needle.displayName = "Needle"

export default Needle
