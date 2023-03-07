import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const LinuxLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M4.96 27.783s4-7 4-15a8 8 0 1 1 16 0c0 8 4 15 4 15h-24Zm8.5-12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.894 4.053a1 1 0 0 1 1.341-.447l3.553 1.776 3.553-1.776a1 1 0 0 1 .894 1.788l-4 2a1 1 0 0 1-.894 0l-4-2a1 1 0 0 1-.447-1.341Zm2.609 7.743a4.193 4.193 0 0 1 2.285-.696c.775 0 1.562.227 2.286.696a5.248 5.248 0 0 1 1.62 1.7h2.057a4.565 4.565 0 0 1-.074-.185c-.036-.09-.073-.184-.083-.203a6.982 6.982 0 0 0-2.343-2.57 6.36 6.36 0 0 0-3.463-1.032 6.36 6.36 0 0 0-3.462 1.032 6.981 6.981 0 0 0-2.345 2.573c-.01.018-.047.11-.083.198a5.224 5.224 0 0 1-.074.178h2.063a5.247 5.247 0 0 1 1.616-1.69Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

LinuxLogoFill.displayName = "LinuxLogoFill"

export default LinuxLogoFill
