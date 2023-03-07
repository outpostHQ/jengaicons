import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const BitbucketLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M27.994 6.173a.5.5 0 0 0-.494-.579h-23a.5.5 0 0 0-.493.58l3.372 20.812a.5.5 0 0 0 .493.42h16.316a.5.5 0 0 0 .493-.422l3.313-20.811ZM12.565 13.68a.5.5 0 0 1 .49-.597h5.953a.5.5 0 0 1 .492.587l-1.038 5.835a.5.5 0 0 1-.492.413h-3.762a.5.5 0 0 1-.49-.403l-1.153-5.835Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

BitbucketLogoFill.displayName = "BitbucketLogoFill"

export default BitbucketLogoFill
