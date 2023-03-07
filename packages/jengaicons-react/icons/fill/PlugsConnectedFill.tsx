import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const PlugsConnectedFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M13.908 3.967a1 1 0 1 0-1.897.632l1 3a1 1 0 1 0 1.897-.632l-1-3Zm-9.897 8a1 1 0 0 1 1.265-.633l3 1a1 1 0 0 1-.632 1.898l-3-1a1 1 0 0 1-.633-1.265Zm21 7a1 1 0 0 1 1.265-.633l3 1a1 1 0 1 1-.633 1.898l-3-1a1 1 0 0 1-.632-1.265Zm-5.367 5.367a1 1 0 0 1 1.264.633l1 3a1 1 0 1 1-1.897.632l-1-3a1 1 0 0 1 .633-1.265ZM12.357 22.3l-.015.015-3.728 3.728A1 1 0 0 1 7.2 24.63l3.728-3.728.015-.015-.776-.776a2 2 0 0 1 0-2.828l3.189-3.189-1.868-1.867a1 1 0 0 1 1.414-1.415l1.868 1.868 3.188-3.189a2 2 0 0 1 2.829 0l.776.776a.752.752 0 0 1 .015-.015l3.727-3.728a1 1 0 1 1 1.415 1.414l-3.728 3.728a.763.763 0 0 1-.016.015l.884.884a2 2 0 0 1 0 2.828l-3.188 3.189 1.76 1.76a1 1 0 0 1-1.415 1.413l-1.76-1.759-3.188 3.188a2 2 0 0 1-2.828 0l-.884-.883Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

PlugsConnectedFill.displayName = "PlugsConnectedFill"

export default PlugsConnectedFill
