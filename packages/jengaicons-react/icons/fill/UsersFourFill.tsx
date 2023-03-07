import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const UsersFourFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M14.578 10.101a3.3 3.3 0 1 0-3.9 0 5.408 5.408 0 0 0-3.456 5.044 1 1 0 1 0 2 0 3.406 3.406 0 0 1 6.812-.026v.027a1 1 0 1 0 2 0v-.027a3.406 3.406 0 0 1 6.813.027 1 1 0 0 0 2 0 5.408 5.408 0 0 0-3.456-5.044 3.3 3.3 0 1 0-3.9 0 5.422 5.422 0 0 0-2.457 1.91 5.424 5.424 0 0 0-2.456-1.91Zm1.22 10.719a3.685 3.685 0 1 1-7.369 0 3.685 3.685 0 0 1 7.37 0Zm9.713-.056c0 2-1.618 3.622-3.616 3.63a4.848 4.848 0 0 1 4.73 3.853c.113.54-.345.993-.898.993h-7.693c-.552 0-1.01-.453-.898-.993a4.848 4.848 0 0 1 4.732-3.854 3.63 3.63 0 1 1 3.643-3.629Zm-13.397 3.74a4.923 4.923 0 0 0-4.82 3.928c-.112.541.347.994.899.994h7.842c.552 0 1.01-.453.9-.994a4.923 4.923 0 0 0-4.821-3.927Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

UsersFourFill.displayName = "UsersFourFill"

export default UsersFourFill
