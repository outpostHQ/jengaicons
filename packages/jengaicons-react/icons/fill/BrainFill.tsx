import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const BrainFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M12.48 6.236a3.48 3.48 0 0 0-2.952 5.322 1 1 0 0 1-.613 1.503 3.868 3.868 0 0 0-.11 7.488c.035.001.07.004.107.01l.49.07a.734.734 0 0 0 .83-.624 1 1 0 1 1 1.98.281A2.734 2.734 0 0 1 10.1 22.57a2.981 2.981 0 1 0 5.86.837v-2.448a2.108 2.108 0 0 0-2.108-2.107 1 1 0 1 1 0-2c.749 0 1.476.204 2.108.581V9.712a3.48 3.48 0 0 0-3.48-3.476Zm4.48.323a5.48 5.48 0 0 0-9.655 4.962 5.868 5.868 0 0 0 .778 10.9 4.981 4.981 0 0 0 8.876 3.92 4.981 4.981 0 0 0 8.876-3.92 5.868 5.868 0 0 0 .78-10.9A5.48 5.48 0 0 0 16.96 6.56Zm1 3.153v7.721a4.108 4.108 0 0 1 2.108-.581 1 1 0 1 1 0 2 2.108 2.108 0 0 0-2.108 2.107v2.448l.001.029a2.981 2.981 0 1 0 5.84-.933 2.735 2.735 0 0 1-1.869-2.181l-.076-.49a1 1 0 0 1 1.976-.309l.076.49a.734.734 0 0 0 .839.61l.092-.01a3.868 3.868 0 0 0 .166-7.552 1 1 0 0 1-.613-1.503 3.48 3.48 0 1 0-6.432-1.847Zm-4.549.505a1 1 0 0 1 1 1v.885a4.097 4.097 0 0 1-4.096 4.097 1 1 0 1 1 0-2 2.097 2.097 0 0 0 2.096-2.097v-.885a1 1 0 0 1 1-1Zm6.042 1a1 1 0 0 1 2 0v.885a2.097 2.097 0 0 0 2.096 2.097 1 1 0 1 1 0 2 4.097 4.097 0 0 1-4.096-4.097v-.885Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

BrainFill.displayName = "BrainFill"

export default BrainFill
