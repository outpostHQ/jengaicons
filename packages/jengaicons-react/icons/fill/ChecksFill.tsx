import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const ChecksFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M23.267 11.123a1 1 0 0 0-1.414-1.414l-5.895 5.895a1 1 0 0 0 1.415 1.414l5.894-5.895Zm-17.6 4.453a1 1 0 0 0-1.414 1.414l5.867 5.867a1 1 0 0 0 1.414 0l.808-.808a1 1 0 1 0-1.415-1.414l-.1.1-5.16-5.159Zm24-4.453a1 1 0 0 0-1.414-1.414L17.227 20.735l-5.16-5.159a1 1 0 0 0-1.414 1.414l5.866 5.867a1 1 0 0 0 1.415 0l11.733-11.734Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

ChecksFill.displayName = "ChecksFill"

export default ChecksFill
