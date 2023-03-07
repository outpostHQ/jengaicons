import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Vault = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
  const { size, color, alt, children, mirrored, weight, style } = props

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
    style: styleCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>)

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
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
        stroke={color || colorCtx || "#000000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='M24 23.5v3M8 23.5v3'
      />
      <path
        fill={color || colorCtx || "#000000"}
        d='M19.925 16.13a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26ZM7.851 12.527a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7.851 15.472a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7.851 18.472a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.851 12.527a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.851 15.472a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.851 18.472a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='M19.925 18.575a4.075 4.075 0 1 0 0-8.15 4.075 4.075 0 0 0 0 8.15Z'
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin='round'
        strokeWidth={weight || weightCtx || "2"}
        d='M4 5.5h24v18H4v-18Z'
      />

      {children || childrenCtx}
    </svg>
  )
})

Vault.displayName = "Vault"

export default Vault
