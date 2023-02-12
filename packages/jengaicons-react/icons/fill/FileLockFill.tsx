import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileLockFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color } = props;

  return (
    <svg
      style={{ width: size || 32, height: size || 32 }}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.96 22.783h9v5.5h-9v-5.5ZM9.96 21.283a2.5 2.5 0 1 1 5 0v1.5h-5v-1.5Z"
      />
      <path
        fill={color || "#000000"}
        d="M19.981 4.283H6.96v11.982h14.998v12.018h5.002V11.291l-6.979-7.008Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.981 4.283H6.96v11.982h14.998v12.018h5.002V11.291l-6.979-7.008Z"
      />
      <path
        fill={color || "#000000"}
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.05 11.224V4.41l6.818 6.813h-6.819Z"
      />
    </svg>
  );
});

FileLockFill.displayName = "FileLockFill";

export default FileLockFill;
