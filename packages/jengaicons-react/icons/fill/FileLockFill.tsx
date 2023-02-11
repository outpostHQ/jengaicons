import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FileLockFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size = 32 } = props;

  return (
    <svg
      style={{ width: size, height: size }}
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M7.96 22.783h9v5.5h-9v-5.5ZM9.96 21.283a2.5 2.5 0 1 1 5 0v1.5h-5v-1.5Z"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19.981 4.283H6.96v11.982h14.998v12.018h5.002V11.291l-6.979-7.008Z"
        fill="#1C1B1F"
      />
      <path
        d="M19.981 4.283H6.96v11.982h14.998v12.018h5.002V11.291l-6.979-7.008Z"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.05 11.224V4.41l6.818 6.813h-6.819Z"
        fill="#fff"
        stroke="#1C1B1F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FileLockFill.displayName = "FileLockFill";

export default FileLockFill;
