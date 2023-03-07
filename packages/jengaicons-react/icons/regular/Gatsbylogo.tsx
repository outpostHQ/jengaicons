import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Gatsbylogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          fillRule='evenodd'
          d='m5.274 16.79 11.57 11.46-.018-.01.004.004c-6.492-.068-11.748-5.29-11.87-11.766l.314.312Zm-.025-3.18c1.202-5.357 5.989-9.36 11.71-9.36 4.028 0 7.592 1.983 9.769 5.026h-.042l-1.568 1.373a9.885 9.885 0 0 0-8.159-4.293 9.9 9.9 0 0 0-9.369 6.7l12.562 12.557a9.912 9.912 0 0 0 6.46-7.176h-5.236v-2.044h7.188v.001h.396c-.068 5.652-4.045 10.364-9.354 11.559l-.17-.17-.002.003L7.096 15.452v.003L5.248 13.61Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

Gatsbylogo.displayName = "Gatsbylogo"

export default Gatsbylogo
