import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const GasPumpRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M4 26.15h18.456M15.996 14.154H10.46"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.768 5.849h12.919v20.302H6.768z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.695 14.132h1.885a2.782 2.782 0 0 1 2.782 2.781v3.744a1.82 1.82 0 0 0 1.819 1.82v0A1.82 1.82 0 0 0 28 20.656V10.572l-2.81-2.81"
        />
      </svg>
    );
  }
);

GasPumpRegular.displayName = "GasPumpRegular";

export default GasPumpRegular;
