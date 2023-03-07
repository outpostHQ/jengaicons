import * as React from "react"
import { forwardRef, useContext } from "react"
import type { Context } from "react"
import { JengaIconContext } from "../../src/base"
import type { JengaIconRegularProps } from "../../src/base"

const ArticleNyTimes = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          strokeLinejoin='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M18.892 14.172H28M18.892 17.815H28M18.892 21.458H28M8.874 25.1H28M15.08 17.316a5.464 5.464 0 1 1-5.303-6.787M9.777 15.364l-.006 6.081'
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap='round'
          strokeWidth={weight || weightCtx || "2"}
          d='M12.951 7.9a2.441 2.441 0 1 1-1.552 4.324l-.115-.113a.513.513 0 0 1-.02-.021c-.19-.21-3.08-3.417-3.37-3.674-.301-.266-.957-.517-1.453-.517a2.441 2.441 0 0 0-1.085 4.629'
        />

        {children || childrenCtx}
      </svg>
    )
  },
)

ArticleNyTimes.displayName = "ArticleNyTimes"

export default ArticleNyTimes
