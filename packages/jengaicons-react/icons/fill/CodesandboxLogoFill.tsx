import * as React from "react"
import { forwardRef, useContext } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconProps } from "../../src/base"

const CodesandboxLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d='M17.448 3.41a1 1 0 0 0-.976 0L5.748 9.411a1 1 0 0 0-.512.873v11.998a1 1 0 0 0 .512.873l10.724 6a1 1 0 0 0 .976 0l10.724-6a1 1 0 0 0 .512-.873V10.284a1 1 0 0 0-.512-.873l-10.724-6ZM7.236 11.916v4.807l3.704 2.18a1 1 0 0 1 .493.862v4.28l4.646 2.6v-9.803l-8.843-4.925Zm10.843 4.976v9.619l4.385-2.454v-4.62a1 1 0 0 1 .493-.862l3.727-2.194v-4.378l-8.605 4.889Zm7.57-6.601L21.697 8.08l-4.42 2.26a1 1 0 0 1-.916-.004l-4.233-2.203-3.779 2.114 8.774 4.887 8.526-4.843Z'
          clipRule='evenodd'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

CodesandboxLogoFill.displayName = "CodesandboxLogoFill"

export default CodesandboxLogoFill
