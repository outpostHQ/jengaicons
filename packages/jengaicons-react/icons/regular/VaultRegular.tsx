import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const VaultRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M24 23.5v3M8 23.5v3"
      />
      <path
        fill={color || "#000000"}
        d="M19.925 16.13a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26ZM7.851 12.527a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7.851 15.472a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7.851 18.472a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.851 12.527a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.851 15.472a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.851 18.472a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.925 18.575a4.075 4.075 0 1 0 0-8.15 4.075 4.075 0 0 0 0 8.15Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 5.5h24v18H4v-18Z"
      />
    </svg>
  );
});

VaultRegular.displayName = "VaultRegular";

export default VaultRegular;
