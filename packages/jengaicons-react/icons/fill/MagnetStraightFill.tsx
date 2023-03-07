import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const MagnetStraightFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M13.726 16.27V4.283H6.047V17.37c0 6.027 4.886 10.913 10.913 10.913s10.913-4.886 10.913-10.913V4.283h-7.636V16.27a3.255 3.255 0 0 1-6.51 0Zm0-5.576h-7.68l.001-6.41 7.68-.003v6.413Zm6.515-.005 7.63.005.002-6.41h-7.636l.004 6.405Z'
          clipRule='evenodd'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeWidth='2'
          d='M6.047 4.283h7.68V16.27a3.255 3.255 0 0 0 6.51 0V4.283m-14.19 0V17.37c0 6.027 4.886 10.913 10.913 10.913s10.913-4.886 10.913-10.913V4.283m-21.826 0v6.41h7.68V4.282l-7.68.002Zm21.826 0h-7.636m7.636 0-.002 6.41-7.63-.004-.004-6.406'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

MagnetStraightFill.displayName = "MagnetStraightFill"

export default MagnetStraightFill
