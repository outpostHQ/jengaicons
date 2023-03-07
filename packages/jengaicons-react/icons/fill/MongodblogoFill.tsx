import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const MongodblogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M13.762 7.39c1.082-1.202 2-2.403 2.2-2.66a.059.059 0 0 1 .074 0c.184.257 1.119 1.458 2.2 2.66 9.244 11.032-1.448 18.479-1.448 18.479l-.092.051a60.375 60.375 0 0 1-.275 2.797h-.807s-.201-1.647-.275-2.797l-.091-.068c-.037.017-10.728-7.43-1.486-18.463ZM16 25.696s.477-.377.606-.583v-.017l-.587-12.011c0-.034-.055-.034-.055 0l-.587 12.01v.018c.128.206.623.583.623.583Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

MongodblogoFill.displayName = "MongodblogoFill"

export default MongodblogoFill
