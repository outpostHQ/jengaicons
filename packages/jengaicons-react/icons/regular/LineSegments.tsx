import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const LineSegments = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M6.571 26.286a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143ZM12.571 15.143a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143ZM19.429 22a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143ZM25.429 10.857a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143ZM11.352 14.836 7.791 21.45M17.61 17.61l-3.22-3.22M24.21 10.55l-3.562 6.614"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LineSegments.displayName = "LineSegments";

export default LineSegments;