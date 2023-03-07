import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Webhook = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeWidth={weight || weightCtx || "2"}
          d='m10.206 20.075 3.566-5.885M17.794 12.043l2.883 5.387M14.209 22.024h6.198M13.878 14.246a5.089 5.089 0 1 1 7.511-2.423M20.682 17.449a5.089 5.089 0 1 1-1.462 8.08M7.701 17.074a5.089 5.089 0 1 0 6.476 5.05'
        />
        <circle
          cx='16.646'
          cy='9.976'
          r='2.25'
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
        />
        <circle
          cx='22.71'
          cy='22.024'
          r='2.25'
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          transform='rotate(135 22.71 22.024)'
        />
        <circle
          cx='2.25'
          cy='2.25'
          r='2.25'
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          transform='scale(1 -1) rotate(-45 -23.633 -18.142)'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

Webhook.displayName = "Webhook"

export default Webhook
