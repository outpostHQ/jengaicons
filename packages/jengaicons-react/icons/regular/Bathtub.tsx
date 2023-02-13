import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Bathtub = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M10 23.286v2.571M22 23.286v2.571"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          d="M4 14.357a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v3.929a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3.929Z"
        />
        <rect
          width="6.857"
          height="4.286"
          x="16.857"
          y="13.857"
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          rx=".5"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M8.286 13.857V8.143a2 2 0 0 1 2-2h.285a2 2 0 0 1 2 2v.143"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Bathtub.displayName = "Bathtub";

export default Bathtub;
