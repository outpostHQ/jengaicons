import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const NotePencil = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeLinecap='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M16.626 4H4.5a.5.5 0 0 0-.5.5v23a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5V14.008'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M28 8.866 23.134 4l-10.46 10.424-.483 4.962h5.387L28 8.866Z'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeWidth={weight || weightCtx || "2"}
          d='m20.631 6.522 4.852 4.852'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

NotePencil.displayName = "NotePencil"

export default NotePencil
