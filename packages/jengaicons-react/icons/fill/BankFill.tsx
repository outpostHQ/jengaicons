import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const BankFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d='M16.788 6.428a.5.5 0 0 0-.539 0l-9.917 6.347c-.42.269-.23.92.27.92h1.215v7.093H6.674a1 1 0 1 0 0 2h20.572a1 1 0 1 0 0-2h-2v-7.092h1.19c.499 0 .69-.652.269-.921l-9.917-6.347Zm6.458 7.268h-3.143v7.092h3.143v-7.092Zm-5.143 0H14.96v7.092h3.143v-7.092Zm-5.143 0H9.817v7.092h3.143v-7.092Zm-9 11.52a1 1 0 0 1 1-1h24a1 1 0 0 1 0 2h-24a1 1 0 0 1-1-1Z'
        clipRule='evenodd'
      />

      {children || childrenCtx}
    </svg>
  )
})

BankFill.displayName = "BankFill"

export default BankFill
