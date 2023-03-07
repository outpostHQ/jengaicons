import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Command = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M13 13h6v6h-6v-6ZM19 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-3.5 3.5H19V9.5ZM13 9.5a3.5 3.5 0 1 0-7 0A3.5 3.5 0 0 0 9.5 13H13V9.5ZM19 22.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-3.5-3.5H19v3.5ZM13 22.5a3.5 3.5 0 1 1-7 0A3.5 3.5 0 0 1 9.5 19H13v3.5Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

Command.displayName = "Command"

export default Command
