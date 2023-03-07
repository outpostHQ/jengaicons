import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const LightbulbFilamentFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M21.034 21.815a9.238 9.238 0 1 0-8.158-.005v2.701a1 1 0 0 0 1 1h2.084V18.94l-3.95-3.95a1 1 0 0 1 1.414-1.414l3.536 3.535 3.535-3.535a1 1 0 0 1 1.415 1.414l-3.95 3.95v6.571h2.074a1 1 0 0 0 1-1v-2.696Zm-8.153 5.468a1 1 0 0 0 0 2h8.158a1 1 0 1 0 0-2H12.88Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

LightbulbFilamentFill.displayName = "LightbulbFilamentFill"

export default LightbulbFilamentFill
