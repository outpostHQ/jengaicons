import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const CornersOutFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M23.003 3.87a1 1 0 1 0 0 2h5.044v5.044a1 1 0 0 0 2 0V4.87a1 1 0 0 0-1-1h-6.044Zm-17.956 0a1 1 0 0 0-1 1v6.044a1 1 0 1 0 2 0V5.87h5.044a1 1 0 1 0 0-2H5.047Zm0 17.956a1 1 0 0 1 1 1v5.044h5.044a1 1 0 0 1 0 2H5.047a1 1 0 0 1-1-1v-6.044a1 1 0 0 1 1-1Zm25 1a1 1 0 1 0-2 0v5.044h-5.044a1 1 0 1 0 0 2h6.044a1 1 0 0 0 1-1v-6.044Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

CornersOutFill.displayName = "CornersOutFill"

export default CornersOutFill
