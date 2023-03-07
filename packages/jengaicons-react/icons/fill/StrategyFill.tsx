import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const StrategyFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M19.769 10.797a1 1 0 0 1 0-1.414l4.243-4.243a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1-1.415 1.414l-2.51-2.511v7.446a1 1 0 0 1-1 1H8.503v4.875a1 1 0 0 1-.052.317 2.5 2.5 0 1 1-1.908-.033 1 1 0 0 1-.04-.284v-5.875a1 1 0 0 1 1-1h16.24V8.237l-2.56 2.56a1 1 0 0 1-1.415 0Zm-9.31-5.95a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Zm9.967 16.164a1 1 0 1 0-1.414 1.415l1.793 1.793-1.793 1.792a1 1 0 0 0 1.414 1.415l1.793-1.793 1.793 1.793a1 1 0 0 0 1.414-1.415l-1.793-1.793 1.793-1.792a1 1 0 0 0-1.414-1.415l-1.793 1.793-1.793-1.793Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

StrategyFill.displayName = "StrategyFill"

export default StrategyFill
