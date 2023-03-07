import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const PythonlogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M28.52 13.31c-.412-1.656-1.195-2.904-2.86-2.904H23.51v2.54c0 1.97-1.671 3.631-3.578 3.631H14.21c-1.564 0-2.86 1.34-2.86 2.91v5.453c0 1.553 1.35 2.464 2.86 2.908 1.811.53 3.552.627 5.722 0 1.44-.418 2.86-1.258 2.86-2.909v-2.18h-5.715v-.728h8.581c1.666 0 2.282-1.163 2.861-2.904.6-1.794.573-3.52 0-5.817ZM20.292 24.21c.594 0 1.076.487 1.076 1.087 0 .606-.482 1.093-1.076 1.093a1.09 1.09 0 0 1 0-2.18Zm-6.343-8.352h5.721c1.591 0 2.86-1.312 2.86-2.908V7.49c0-1.553-1.306-2.715-2.86-2.978-1.918-.316-4.001-.3-5.721.006-2.421.428-2.86 1.323-2.86 2.978v2.18h5.726v.729H8.94c-1.666 0-3.123 1.002-3.578 2.903-.525 2.18-.547 3.542 0 5.818.407 1.693 1.377 2.904 3.043 2.904h1.966v-2.614c0-1.892 1.633-3.558 3.578-3.558ZM13.59 8.22a1.083 1.083 0 0 1-1.077-1.087A1.087 1.087 0 0 1 13.59 6.04c.59 0 1.077.493 1.077 1.093S14.185 8.22 13.59 8.22Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

PythonlogoFill.displayName = "PythonlogoFill"

export default PythonlogoFill
