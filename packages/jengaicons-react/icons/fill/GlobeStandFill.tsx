import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const GlobeStandFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext)

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
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
          d='M10.78 5.748A1 1 0 0 0 9.31 4.394 12.613 12.613 0 0 0 17.32 25.48v1.802h-2.738a1 1 0 1 0 0 2h7.475a1 1 0 1 0 0-2h-2.737v-1.759a12.613 12.613 0 0 0 7.81-3.31 1 1 0 1 0-1.355-1.471A10.612 10.612 0 0 1 10.781 5.748Zm16.161 6.945a8.41 8.41 0 1 1-16.82 0 8.41 8.41 0 0 1 16.82 0Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

GlobeStandFill.displayName = "GlobeStandFill"

export default GlobeStandFill
