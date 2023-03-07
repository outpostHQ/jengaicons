import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const CloudSnow = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          fill={color || colorCtx || "#000000"}
          d='M10.253 24.08a1.326 1.326 0 1 0 0-2.653 1.326 1.326 0 0 0 0 2.652ZM14.674 25.848a1.326 1.326 0 1 0 0-2.652 1.326 1.326 0 0 0 0 2.652ZM19.979 24.08a1.326 1.326 0 1 0 0-2.653 1.326 1.326 0 0 0 0 2.652ZM9.37 28.5a1.326 1.326 0 1 0 0-2.652 1.326 1.326 0 0 0 0 2.652ZM19.094 28.5a1.326 1.326 0 1 0 0-2.652 1.326 1.326 0 0 0 0 2.652Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M12.01 9.212a5.306 5.306 0 1 0-1.319 10.447h8.149c1.936 0 3.878-.522 5.244-1.894.35-.351.695-.734 1.01-1.138a7.58 7.58 0 1 0-13.645-4.548'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

CloudSnow.displayName = "CloudSnow"

export default CloudSnow
