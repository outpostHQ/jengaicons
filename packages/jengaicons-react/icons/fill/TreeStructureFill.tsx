import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const TreeStructureFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M21.28 6.223a.5.5 0 0 1 .5-.5h6.68a.5.5 0 0 1 .5.5v6.68a.5.5 0 0 1-.5.5h-6.68a.5.5 0 0 1-.5-.5v-2.376h-3.397v11.47h3.397v-2.334a.5.5 0 0 1 .5-.5h6.68a.5.5 0 0 1 .5.5v6.68a.5.5 0 0 1-.5.5h-6.68a.5.5 0 0 1-.5-.5v-2.346h-4.397a1 1 0 0 1-1-1v-5.714H11.68v1.86a.5.5 0 0 1-.5.5H5.46a.5.5 0 0 1-.5-.5v-5.72a.5.5 0 0 1 .5-.5h5.72a.5.5 0 0 1 .5.5v1.86h4.203V9.527a1 1 0 0 1 1-1h4.397V6.223Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

TreeStructureFill.displayName = "TreeStructureFill"

export default TreeStructureFill
