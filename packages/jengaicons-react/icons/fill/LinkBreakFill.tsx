import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const LinkBreakFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M14.268 7.052a1 1 0 1 0-2 0v2.77a1 1 0 0 0 2 0v-2.77Zm7.384 15.692a1 1 0 0 0-2 0v2.77a1 1 0 0 0 2 0v-2.77ZM6.73 12.591a1 1 0 0 1 1-1h2.77a1 1 0 1 1 0 2h-2.77a1 1 0 0 1-1-1Zm16.693 6.384a1 1 0 1 0 0 2h2.769a1 1 0 1 0 0-2h-2.77Zm-12.328-3.353a1 1 0 0 1 0 1.414l-1.305 1.306a3.616 3.616 0 0 0 5.113 5.113l1.305-1.306a1 1 0 0 1 1.414 1.415l-1.305 1.305a5.616 5.616 0 0 1-7.942-7.941l1.306-1.306a1 1 0 0 1 1.414 0Zm10.482-9.569a5.615 5.615 0 0 0-3.97 1.644L16.3 9.002a1 1 0 0 0 1.414 1.414l1.305-1.305a3.615 3.615 0 0 1 5.113 5.113l-1.305 1.305a1 1 0 1 0 1.414 1.415l1.306-1.306a5.615 5.615 0 0 0-3.971-9.585Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

LinkBreakFill.displayName = "LinkBreakFill"

export default LinkBreakFill
