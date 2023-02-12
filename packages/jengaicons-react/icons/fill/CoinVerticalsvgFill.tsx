import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CoinVerticalsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.585 16.283c0-6.627-2.48-12-5.539-12-3.058 0-5.538 5.373-5.538 12s2.48 12 5.538 12c3.06 0 5.539-5.373 5.539-12Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.585 16.283h5.538"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M14.337 28.283h4.906c1.24 0 2.474-.433 3.204-1.434 3.767-5.17 4.125-15.337.032-21.046-.752-1.048-2.03-1.52-3.321-1.52h-4.821"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.443 8.898h5.539M18.443 23.668h5.539"
        />
      </svg>
    );
  }
);

CoinVerticalsvgFill.displayName = "CoinVerticalsvgFill";

export default CoinVerticalsvgFill;
