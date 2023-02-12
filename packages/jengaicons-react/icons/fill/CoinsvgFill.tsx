import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CoinsvgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 19.052c6.628 0 12-2.48 12-5.538 0-3.06-5.372-5.539-12-5.539-6.627 0-12 2.48-12 5.539 0 3.058 5.373 5.538 12 5.538Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.96 19.052v5.538"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M4.96 13.804v4.907c0 1.239.433 2.473 1.434 3.203 5.17 3.767 15.337 4.125 21.046.032 1.049-.751 1.52-2.03 1.52-3.32v-4.822"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M24.345 17.91v5.539M9.576 17.91v5.539"
      />
    </svg>
  );
});

CoinsvgFill.displayName = "CoinsvgFill";

export default CoinsvgFill;
