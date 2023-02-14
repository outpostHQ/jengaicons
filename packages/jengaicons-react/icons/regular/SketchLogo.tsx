import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const SketchLogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M4.26 12.962h23.432"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m10.895 12.697 4.617-6.05a.5.5 0 0 1 .793-.001l4.657 6.05a.5.5 0 0 1 .066.495l-4.656 11.342a.5.5 0 0 1-.926 0L10.83 13.188a.5.5 0 0 1 .066-.492Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M22.006 6.194H9.95a.5.5 0 0 0-.381.177l-5.28 6.236a.5.5 0 0 0 .018.666L15.833 25.48a.5.5 0 0 0 .733-.007l11.136-12.199a.5.5 0 0 0 .011-.662L22.386 6.37a.5.5 0 0 0-.38-.175Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SketchLogo.displayName = "SketchLogo";

export default SketchLogo;
