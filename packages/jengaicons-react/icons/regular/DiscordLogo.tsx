import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const DiscordLogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d='M11.88 19.429a1.48 1.48 0 1 0 0-2.959 1.48 1.48 0 0 0 0 2.959ZM19.768 19.429a1.48 1.48 0 1 0 0-2.959 1.48 1.48 0 0 0 0 2.959Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M9.217 10.06a21.612 21.612 0 0 1 6.607-.985c2.24-.016 4.468.317 6.606.986M22.43 21.894a21.614 21.614 0 0 1-6.606.986 21.613 21.613 0 0 1-6.607-.986'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='m12.518 9.254-1.45-3.7-4.86 1.669L2 22.093c1.402 1.233 5.034 3.83 8.342 4.352l2.176-3.554m7.036 0 1.886 3.555c1.959-.557 6.413-2.206 8.56-4.353l-4.57-14.87-5.005-1.669-1.45 3.7'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

DiscordLogo.displayName = "DiscordLogo"

export default DiscordLogo
