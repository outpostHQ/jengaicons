import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const StripeLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M5.96 4.283a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1h-22Zm6.933 8.43c0-.6.314-1.214 1.007-1.714.698-.503 1.75-.857 3.06-.857 1.995 0 3.328.806 3.824 1.676a1 1 0 1 0 1.737-.99c-.965-1.693-3.11-2.686-5.56-2.686-1.654 0-3.135.446-4.23 1.235-1.1.793-1.838 1.964-1.838 3.336 0 1.587 1.047 2.526 2.18 3.096 1.015.512 2.317.844 3.5 1.146l.288.073c1.33.342 2.495.666 3.333 1.152.783.454 1.132.954 1.132 1.673 0 .547-.333 1.165-1.126 1.692-.785.523-1.927.878-3.24.878-1.312 0-2.454-.355-3.24-.878-.792-.527-1.125-1.145-1.125-1.692a1 1 0 1 0-2 0c0 1.425.868 2.592 2.018 3.357 1.156.77 2.696 1.213 4.347 1.213 1.651 0 3.192-.443 4.348-1.213 1.15-.765 2.018-1.932 2.018-3.357 0-1.66-.955-2.723-2.129-3.403-1.118-.649-2.562-1.031-3.839-1.359l-.217-.055c-1.261-.323-2.356-.604-3.168-1.013-.823-.415-1.08-.815-1.08-1.31Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

StripeLogoFill.displayName = "StripeLogoFill"

export default StripeLogoFill
