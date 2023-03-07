import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const FileRsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M7.96 4.283h11.606a1 1 0 0 1 .709.294L26.669 11a1 1 0 0 1 .291.705v15.579a1 1 0 0 1-1 1h-3.002a1 1 0 0 1-1-1V17.265a1 1 0 0 0-1-1H7.96a1 1 0 0 1-1-1V5.283a1 1 0 0 1 1-1Zm12.09 1.416v5.72h5.724l-5.725-5.72Zm-6.734 17.74a2.614 2.614 0 0 1 2.615-2.614h3.029a1 1 0 0 1 0 2h-3.03a.614.614 0 0 0-.005 1.23h1.494a2.615 2.615 0 0 1-.073 5.229h-3.03a1 1 0 1 1 0-2.001h3.03a.614.614 0 0 0 .005-1.229h-1.535c-.064 0-.125-.006-.185-.017a2.615 2.615 0 0 1-2.315-2.597ZM5.96 21.85c0-.566.458-1.024 1.023-1.024h2.751a2.86 2.86 0 0 1 .961 5.554l1.492 1.099A1 1 0 1 1 11 29.088l-3.04-2.24v1.435a1 1 0 1 1-2 0V21.849Zm2 2.695h1.774a.86.86 0 1 0 0-1.719H7.96v1.72Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

FileRsFill.displayName = "FileRsFill"

export default FileRsFill
