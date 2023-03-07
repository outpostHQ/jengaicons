import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const FileCodeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M6.96 3.283a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V11.29a1 1 0 0 0-.291-.705L20.69 3.577a1 1 0 0 0-.709-.294H6.96Zm1 24v-22h11.09v5.94a1 1 0 0 0 1 1h5.91v15.06h-18Zm13.09-17.06v-3.4l3.402 3.4H21.05Zm-2.455 5.353a1 1 0 0 0 0 1.414l2.828 2.828-2.828 2.829a1 1 0 1 0 1.414 1.414l3.535-3.535a1 1 0 0 0 0-1.415l-3.535-3.535a1 1 0 0 0-1.414 0Zm-3.27 1.414a1 1 0 0 0-1.414-1.414l-3.535 3.535a1 1 0 0 0 0 1.415l3.535 3.535a1 1 0 0 0 1.414-1.414l-2.828-2.829 2.828-2.828Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

FileCodeFill.displayName = "FileCodeFill"

export default FileCodeFill
