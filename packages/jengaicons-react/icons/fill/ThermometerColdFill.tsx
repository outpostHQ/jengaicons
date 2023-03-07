import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const ThermometerColdFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M10.067 7.646v10.589a5.736 5.736 0 0 0-2.61 4.816 5.732 5.732 0 1 0 8.842-4.816V7.645c0-1.58-1.395-2.862-3.116-2.862s-3.116 1.282-3.116 2.863Zm4.121 8.28a1 1 0 1 0-2 0v4.306a3.144 3.144 0 0 0 1 6.123 3.143 3.143 0 0 0 1-6.123v-4.305ZM13.18 22.07H13.198a1.143 1.143 0 1 1-.018 0ZM24.046 8.212a1 1 0 1 0-2 0v2.051l-1.948-.634a1 1 0 0 0-.62 1.901l1.951.636-1.207 1.662a1 1 0 0 0 1.619 1.175l1.205-1.66 1.205 1.66a1 1 0 0 0 1.618-1.175l-1.206-1.662 1.95-.636a1 1 0 1 0-.62-1.901l-1.947.634V8.212Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

ThermometerColdFill.displayName = "ThermometerColdFill"

export default ThermometerColdFill
