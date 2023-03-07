import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const PrescriptionFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M8.295 3.283c-.587 0-1.063.476-1.063 1.062v20.776a1 1 0 1 0 2 0v-7.838h4.04l7.183 7.182-3.111 3.11a1 1 0 1 0 1.414 1.415l3.11-3.111 3.112 3.111a1 1 0 0 0 1.414-1.414l-3.11-3.111 3.11-3.111a1 1 0 0 0-1.414-1.415l-3.111 3.112-5.873-5.874a7 7 0 0 0-1.218-13.894H8.295Zm5.393 12h1.09a5 5 0 0 0 0-10H9.232v10H13.688Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

PrescriptionFill.displayName = "PrescriptionFill"

export default PrescriptionFill
