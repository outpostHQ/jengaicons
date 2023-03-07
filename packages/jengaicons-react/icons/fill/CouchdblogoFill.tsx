import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const CouchdblogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M24.46 19.342c0 .995-.524 1.482-1.5 1.5h-12c-.976-.018-1.5-.505-1.5-1.5 0-.994.524-1.482 1.5-1.5h12c.976.018 1.5.506 1.5 1.5Zm-1.5 2.25h-12c-.976.018-1.5.506-1.5 1.5 0 .995.524 1.482 1.5 1.5h12c.976-.018 1.5-.505 1.5-1.5 0-.994-.524-1.482-1.5-1.5Zm3.75-8.248v-.001c-.976.017-1.5.505-1.5 1.5v8.25c0 .994.524 1.481 1.5 1.498v-.001c1.464-.052 2.25-1.514 2.25-4.498v-3.75c0-1.989-.786-2.964-2.25-2.998Zm-19.5-.001c-1.464.035-2.25 1.01-2.25 3v3.75c0 2.983.786 4.445 2.25 4.497v.001c.976-.017 1.5-.504 1.5-1.499v-8.25c0-.995-.524-1.482-1.5-1.5Zm19.5-.75c0-2.487-1.31-3.706-3.75-3.749v-.002h-12v.002c-2.44.043-3.75 1.262-3.75 3.748v.001c1.464.026 2.25.757 2.25 2.25 0 1.49.786 2.222 2.25 2.248v.001h10.5v-.001c1.464-.026 2.25-.757 2.25-2.249s.786-2.223 2.25-2.249Z'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

CouchdblogoFill.displayName = "CouchdblogoFill"

export default CouchdblogoFill
