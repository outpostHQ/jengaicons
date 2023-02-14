import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Backpack = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M20.567 17.373v3.286M11.6 17.373v3.286"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          d="M7.429 13.286a5 5 0 0 1 5-5h7.143a5 5 0 0 1 5 5v13.357a.5.5 0 0 1-.5.5H7.929a.5.5 0 0 1-.5-.5V13.286Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M19.429 8.286V6.857a2 2 0 0 0-2-2h-2.857a2 2 0 0 0-2 2v1.429M7.429 19.016H6a2 2 0 0 0-2 2v2.857a2 2 0 0 0 2 2h1.429M24.571 19.016H26a2 2 0 0 1 2 2v2.857a2 2 0 0 1-2 2h-1.429M7.429 12.572v2.405c0 1.316.495 2.635 1.65 3.267 3.631 1.985 9.83 2.158 13.755.032 1.204-.652 1.738-2.018 1.738-3.387v-2.317"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Backpack.displayName = "Backpack";

export default Backpack;
