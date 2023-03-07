import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const UserFocusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M12.79 4.783a1 1 0 0 0-1-1H4.96a1 1 0 0 0-1 1v6.83a1 1 0 1 0 2 0v-5.83h5.83a1 1 0 0 0 1-1Zm8.34 0a1 1 0 0 1 1-1h6.83a1 1 0 0 1 1 1v6.83a1 1 0 1 1-2 0v-5.83h-5.83a1 1 0 0 1-1-1Zm.058 9.176a4.228 4.228 0 0 1-4.226 4.229 5.648 5.648 0 0 1 5.557 4.651c.097.544-.36.996-.912.996h-9.294c-.552 0-1.01-.452-.913-.996a5.648 5.648 0 0 1 5.558-4.651 4.228 4.228 0 1 1 4.23-4.228Zm.942 15.824a1 1 0 0 1 0-2h5.83v-5.83a1 1 0 1 1 2 0v6.83a1 1 0 0 1-1 1h-6.83Zm-10.34 0a1 1 0 0 0 0-2H5.96v-5.83a1 1 0 1 0-2 0v6.83a1 1 0 0 0 1 1h6.83Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

UserFocusFill.displayName = "UserFocusFill"

export default UserFocusFill
