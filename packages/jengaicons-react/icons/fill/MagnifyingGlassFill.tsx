import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const MagnifyingGlassFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M22.144 22.88a10.457 10.457 0 0 1-6.684 2.403c-5.799 0-10.5-4.701-10.5-10.5 0-5.8 4.701-10.5 10.5-10.5s10.5 4.7 10.5 10.5c0 2.54-.902 4.87-2.403 6.685.012.01.023.022.034.033l6.075 6.075a1 1 0 0 1-1.414 1.414l-6.075-6.075a.884.884 0 0 1-.033-.034Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

MagnifyingGlassFill.displayName = "MagnifyingGlassFill"

export default MagnifyingGlassFill
