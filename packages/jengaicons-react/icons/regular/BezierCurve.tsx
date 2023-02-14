import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const BezierCurve = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M4 10.857h9.429M18.572 10.857H28M16 13.428a2.571 2.571 0 1 0 0-5.142 2.571 2.571 0 0 0 0 5.143ZM6.571 23.714a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143ZM25.429 23.714a2.571 2.571 0 1 0 0-5.143 2.571 2.571 0 0 0 0 5.143Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M18.55 11.21a9.438 9.438 0 0 1 6.729 7.361M6.721 18.571a9.44 9.44 0 0 1 6.729-7.36"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BezierCurve.displayName = "BezierCurve";

export default BezierCurve;
