import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CirclesThreePlusFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          d="M9.87 14.101a4.909 4.909 0 1 0 0-9.818 4.909 4.909 0 0 0 0 9.818ZM24.05 14.101a4.91 4.91 0 1 0 0-9.818 4.91 4.91 0 0 0 0 9.818ZM9.87 28.283a4.91 4.91 0 1 0-.001-9.818 4.91 4.91 0 0 0 0 9.818Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M24.05 19.556v7.636M27.87 23.374h-7.637"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CirclesThreePlusFill.displayName = "CirclesThreePlusFill";

export default CirclesThreePlusFill;
