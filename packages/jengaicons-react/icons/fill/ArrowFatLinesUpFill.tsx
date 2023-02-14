import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ArrowFatLinesUpFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.167 16.283a.5.5 0 0 1-.353-.854L16.607 4.636a.5.5 0 0 1 .707 0L28.107 15.43a.5.5 0 0 1-.354.854H23.46a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 0-.5-.5H6.167Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M22.96 28.283h-12M22.96 24.283h-12"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ArrowFatLinesUpFill.displayName = "ArrowFatLinesUpFill";

export default ArrowFatLinesUpFill;
