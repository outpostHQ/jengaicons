import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const DiscordLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='m13.172 8.486-.623-1.516a.545.545 0 0 0-.68-.308L8.084 7.96a.545.545 0 0 0-.347.366l-3.757 13.28a.53.53 0 0 0 .167.554c1.4 1.166 4.37 3.206 7.169 3.776a.522.522 0 0 0 .549-.248l.794-1.313c.07-.119 0-.272-.136-.299a21.249 21.249 0 0 1-2.223-.566 1.09 1.09 0 0 1 .65-2.08 19.09 19.09 0 0 0 5.837.872h.015a19.09 19.09 0 0 0 5.836-.871 1.09 1.09 0 0 1 .65 2.079c-.699.219-1.408.401-2.124.546a.202.202 0 0 0-.133.303l.154.253.638 1.038a.533.533 0 0 0 .61.234c1.898-.584 5.426-1.958 7.361-3.72a.52.52 0 0 0 .141-.54L25.848 8.321a.545.545 0 0 0-.349-.357l-3.953-1.317a.545.545 0 0 0-.663.28l-.458.948-.196.433a.202.202 0 0 0 .155.282c.973.147 1.935.357 2.88.627a1.09 1.09 0 1 1-.6 2.095 20.815 20.815 0 0 0-5.862-.801h-.014a20.816 20.816 0 0 0-5.862.8 1.09 1.09 0 0 1-.6-2.094c.911-.26 1.838-.465 2.776-.61a.09.09 0 0 0 .07-.121Zm1.321 9.583a1.381 1.381 0 1 1-2.762 0 1.381 1.381 0 0 1 2.762 0Zm7.366 0a1.381 1.381 0 1 1-2.762 0 1.381 1.381 0 0 1 2.762 0Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

DiscordLogoFill.displayName = "DiscordLogoFill"

export default DiscordLogoFill
