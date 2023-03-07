import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const NuxtjslogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='m15.284 9.075 3.138 5.265 1.673-2.779a1.45 1.45 0 0 1 2.497 0l6.165 10.457a1.45 1.45 0 0 1-1.248 2.185h-9.064l1.412-2.477h5.766l-4.318-7.411-4.117 7.159a5.422 5.422 0 0 1-4.7 2.719l.004-.007-.005.007H6.413a1.45 1.45 0 0 1-1.249-2.186l7.624-12.932a1.45 1.45 0 0 1 2.497 0Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

NuxtjslogoFill.displayName = "NuxtjslogoFill"

export default NuxtjslogoFill
