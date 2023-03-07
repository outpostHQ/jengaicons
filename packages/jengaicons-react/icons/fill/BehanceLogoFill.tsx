import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const BehanceLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeWidth='2'
          d='M19.73 19.056a4.615 4.615 0 0 0 7.798 3.343m-7.798-3.343a4.615 4.615 0 0 1 9.204-.499c.03.275-.198.5-.474.5h-8.73Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M20.652 10.74h7.385'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth='2'
          d='M4.96 8.942c0-.026.022-.048.048-.048h6.187a3.451 3.451 0 0 1 0 6.903H5.008a.048.048 0 0 1-.048-.048V8.942Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth='2'
          d='M4.96 15.854c0-.031.026-.057.058-.057h7.547a3.933 3.933 0 1 1 0 7.866H5.018a.057.057 0 0 1-.058-.057v-7.752Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

BehanceLogoFill.displayName = "BehanceLogoFill"

export default BehanceLogoFill
