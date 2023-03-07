import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const Astrologo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
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
          strokeWidth={weight || weightCtx || "2"}
          d='M19.588 4.601c.198.244.299.572.5 1.229l4.413 14.347a18.489 18.489 0 0 0-5.275-1.768L16.353 8.8a.373.373 0 0 0-.358-.264.373.373 0 0 0-.36.266l-2.837 9.603c-1.88.325-3.66.93-5.299 1.77l4.434-14.348c.203-.655.304-.983.502-1.226.175-.214.402-.38.66-.484C13.388 4 13.735 4 14.427 4h3.167c.693 0 1.04 0 1.333.117.258.103.486.27.66.484Z'
          clipRule='evenodd'
        />
        <path
          fill={color || colorCtx || "#000000"}
          stroke={color || colorCtx || "#000000"}
          d='M16.754 25.407c-.32.371-.52.832-.544 1.44a2.27 2.27 0 0 1-.504-1.43V25.31c0-.354.002-.868-.173-1.293a1.362 1.362 0 0 0-.513-.637c-.254-.167-.56-.242-.906-.242-.528 0-1.001.247-1.305.631a3.665 3.665 0 0 1-.385-1.032 4.126 4.126 0 0 1-.091-.839v-.044l.001-.01.001-.014v-.015c0-.11.004-.24.014-.377.303.205.658.373 1.034.507.806.286 1.807.451 2.881.451 1.34 0 2.6-.258 3.497-.713l.003.132c0 .455-.116.882-.32 1.255-.397.726-.967 1.091-1.578 1.475l-.03.019c-.36.226-.772.484-1.082.844Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

Astrologo.displayName = "Astrologo"

export default Astrologo
