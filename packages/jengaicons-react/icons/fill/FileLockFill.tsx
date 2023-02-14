import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileLockFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.96 22.783h9v5.5h-9v-5.5ZM9.96 21.283a2.5 2.5 0 1 1 5 0v1.5h-5v-1.5Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M19.981 4.283H6.96v11.982h14.998v12.018h5.002V11.291l-6.979-7.008Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.981 4.283H6.96v11.982h14.998v12.018h5.002V11.291l-6.979-7.008Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.05 11.224V4.41l6.818 6.813h-6.819Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

FileLockFill.displayName = "FileLockFill";

export default FileLockFill;
