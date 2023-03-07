import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const ThermometerCold = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d='M12.228 25.073a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286ZM12.228 20.787v-5.143M22.086 7.929v3.428M18.829 10.297l3.257 1.06M20.072 14.133l2.014-2.776M24.1 14.133l-2.014-2.776M25.343 10.297l-3.257 1.06M9.106 17.952V7.363c0-1.581 1.396-2.863 3.117-2.863 1.72 0 3.116 1.282 3.116 2.863v10.589'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M9.11 17.958a5.732 5.732 0 1 0 6.239 0'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

ThermometerCold.displayName = "ThermometerCold"

export default ThermometerCold
