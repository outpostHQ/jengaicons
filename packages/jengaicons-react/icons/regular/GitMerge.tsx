import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const GitMerge = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M7.818 28a3.818 3.818 0 1 0 0-7.636 3.818 3.818 0 0 0 0 7.636ZM7.818 11.636a3.818 3.818 0 1 0 0-7.636 3.818 3.818 0 0 0 0 7.636ZM24.182 21.454a3.818 3.818 0 1 0 0-7.636 3.818 3.818 0 0 0 0 7.636Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M20.346 17.962h-2.417a10 10 0 0 1-7.447-3.326l-2.674-2.983v8.72"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GitMerge.displayName = "GitMerge";

export default GitMerge;
