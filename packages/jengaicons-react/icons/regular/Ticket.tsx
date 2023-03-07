import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Ticket = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d='M12.308 8.192v16.616'
        />
        <path
          fill={color || colorCtx || "#000000"}
          d='M28 13.435v1a1 1 0 0 0 1-1h-1Zm0 6.13h1a1 1 0 0 0-1-1v1Zm-24 0v-1a1 1 0 0 0-1 1h1Zm0-6.13H3a1 1 0 0 0 1 1v-1Zm.5-6.243a1.5 1.5 0 0 0-1.5 1.5h2a.5.5 0 0 1-.5.5v-2Zm23 0h-23v2h23v-2Zm1.5 1.5a1.5 1.5 0 0 0-1.5-1.5v2a.5.5 0 0 1-.5-.5h2Zm0 4.743V8.692h-2v4.743h2ZM25.934 16.5c0-1.14.925-2.065 2.066-2.065v-2a4.066 4.066 0 0 0-4.066 4.065h2ZM28 18.566a2.066 2.066 0 0 1-2.066-2.066h-2A4.066 4.066 0 0 0 28 20.566v-2Zm1 5.742v-4.742h-2v4.742h2Zm-1.5 1.5a1.5 1.5 0 0 0 1.5-1.5h-2a.5.5 0 0 1 .5-.5v2Zm-23 0h23v-2h-23v2Zm-1.5-1.5a1.5 1.5 0 0 0 1.5 1.5v-2a.5.5 0 0 1 .5.5H3Zm0-4.742v4.742h2v-4.742H3ZM6.066 16.5c0 1.141-.925 2.066-2.066 2.066v2A4.066 4.066 0 0 0 8.066 16.5h-2ZM4 14.435c1.14 0 2.066.924 2.066 2.065h2A4.066 4.066 0 0 0 4 12.435v2ZM3 8.692v4.743h2V8.692H3Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

Ticket.displayName = "Ticket"

export default Ticket
