import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const IoniclogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M16.014 4.731c1.948 0 3.782.455 5.503 1.337l.227.114-.199.156a3.708 3.708 0 0 0-1.109 1.45l-.071.157-.142-.071a9.732 9.732 0 0 0-4.195-.953c-5.417 0-9.81 4.408-9.81 9.81 0 5.403 4.38 9.81 9.796 9.81 5.417 0 9.81-4.407 9.81-9.81 0-1.293-.241-2.559-.753-3.753L25 12.822l.156-.072a3.796 3.796 0 0 0 1.508-1.023l.156-.2.1.228A11.805 11.805 0 0 1 28 16.703c0 6.611-5.389 12-12 12s-12-5.389-12-12 5.389-12 12.014-11.972Zm0 6.54c3 0 5.46 2.446 5.474 5.475a5.467 5.467 0 0 1-5.474 5.474 5.467 5.467 0 0 1-5.474-5.474 5.476 5.476 0 0 1 5.474-5.474Zm7.834-4.52a2.502 2.502 0 1 1 0 5.004 2.502 2.502 0 0 1 0-5.005Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

IoniclogoFill.displayName = "IoniclogoFill"

export default IoniclogoFill
