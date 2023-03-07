import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const TextAlignJustifyFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M7.729 8.99a1 1 0 1 0 0 2H26.19a1 1 0 0 0 0-2H7.73Zm0 4.195a1 1 0 1 0 0 2H26.19a1 1 0 1 0 0-2H7.73Zm-1 5.196a1 1 0 0 1 1-1h18.462a1 1 0 0 1 0 2H7.73a1 1 0 0 1-1-1Zm1 3.196a1 1 0 1 0 0 2h18.462a1 1 0 0 0 0-2H7.73Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

TextAlignJustifyFill.displayName = "TextAlignJustifyFill"

export default TextAlignJustifyFill
