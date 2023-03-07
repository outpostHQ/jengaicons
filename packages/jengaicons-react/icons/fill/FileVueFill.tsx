import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const FileVueFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M6.108 18.367h21.703a1 1 0 0 0 1-1v-6.68a1 1 0 0 0-.291-.705L22.126 3.56a1 1 0 0 0-.709-.294H6.108a1 1 0 0 0-1 1v13.1a1 1 0 0 0 1 1Zm15.793-8.66V4.484l5.727 5.723h-5.227a.5.5 0 0 1-.5-.5ZM6.628 21.617a1 1 0 0 0-1.864.726l2.422 6.216a1 1 0 0 0 1.853.026l2.627-6.215a1 1 0 0 0-1.843-.779l-1.667 3.947-1.528-3.92Zm16.065.363a1 1 0 0 1 1-1h3.626a1 1 0 0 1 0 2h-2.626v1.108h2.108a1 1 0 0 1 0 2h-2.108v1.108h2.626a1 1 0 1 1 0 2h-3.626a1 1 0 0 1-1-1V21.98Zm-7.805-1a1 1 0 0 1 1 1v4.216a1 1 0 0 0 1 1h.592a1 1 0 0 0 1-1V21.98a1 1 0 0 1 2 0v4.216a3 3 0 0 1-3 3h-.592a3 3 0 0 1-3-3V21.98a1 1 0 0 1 1-1Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

FileVueFill.displayName = "FileVueFill"

export default FileVueFill
