import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const InstagramLogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeMiterlimit='10'
          strokeWidth={weight || weightCtx || "2"}
          d='M16 21.217a5.217 5.217 0 1 0 0-10.434 5.217 5.217 0 0 0 0 10.434Z'
        />
        <rect
          width='24'
          height='24'
          x='4'
          y='4'
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          rx='5'
        />
        <path
          fill={color || colorCtx || "#000000"}
          d='M22.782 10.783a1.565 1.565 0 1 0 0-3.13 1.565 1.565 0 0 0 0 3.13Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

InstagramLogo.displayName = "InstagramLogo"

export default InstagramLogo
