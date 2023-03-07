import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const BookmarksSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M11.905 3.283a1 1 0 1 0 0 2H25.06v18.956a1 1 0 1 0 2 0V4.283a1 1 0 0 0-1-1H11.905ZM7.861 8.827V27.29a.5.5 0 0 0 .798.401l6.016-4.462a.5.5 0 0 1 .598.001l5.942 4.454a.5.5 0 0 0 .8-.4V8.826a.5.5 0 0 0-.5-.5H8.361a.5.5 0 0 0-.5.5Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

BookmarksSimpleFill.displayName = "BookmarksSimpleFill"

export default BookmarksSimpleFill
