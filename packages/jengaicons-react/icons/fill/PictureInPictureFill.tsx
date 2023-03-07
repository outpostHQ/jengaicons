import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const PictureInPictureFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M28.96 8.283a.5.5 0 0 0-.5-.5h-23a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5v-17Zm-1.287 9a.5.5 0 0 0-.5-.5H18.46a.5.5 0 0 0-.5.5v6.989a.5.5 0 0 0 .5.5h8.713a.5.5 0 0 0 .5-.5v-6.989Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

PictureInPictureFill.displayName = "PictureInPictureFill"

export default PictureInPictureFill
