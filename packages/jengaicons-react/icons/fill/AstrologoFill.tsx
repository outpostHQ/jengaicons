import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const AstrologoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M20.548 4.884c.198.244.299.572.5 1.229l4.413 14.347a18.49 18.49 0 0 0-5.275-1.768l-2.873-9.61a.373.373 0 0 0-.358-.265.373.373 0 0 0-.36.267l-2.837 9.603c-1.879.325-3.66.93-5.299 1.77L12.893 6.11c.203-.655.304-.983.502-1.226.175-.214.402-.38.66-.484.293-.116.64-.116 1.332-.116h3.167c.693 0 1.04 0 1.333.117.258.103.486.27.66.484ZM21.076 21.143c-.728.616-2.18 1.035-3.852 1.035-2.052 0-3.772-.632-4.229-1.483-.163.488-.2 1.046-.2 1.402 0 0-.107 1.75 1.123 2.968a1.15 1.15 0 0 1 1.156-1.145c1.094 0 1.093.945 1.092 1.712v.069c0 1.163.718 2.161 1.74 2.582a2.328 2.328 0 0 1-.238-1.029c0-1.11.659-1.523 1.424-2.004.609-.382 1.285-.806 1.751-1.658a3.112 3.112 0 0 0 .232-2.449Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

AstrologoFill.displayName = "AstrologoFill"

export default AstrologoFill
