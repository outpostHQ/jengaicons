import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CoinRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 18.77c6.627 0 12-2.48 12-5.54 0-3.058-5.373-5.538-12-5.538s-12 2.48-12 5.539c0 3.059 5.373 5.538 12 5.538ZM16 18.77v5.538"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M4 13.521v4.907c0 1.24.432 2.473 1.434 3.203 5.17 3.768 15.337 4.125 21.046.033 1.048-.752 1.52-2.031 1.52-3.322v-4.82"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M23.384 17.628v5.538M8.615 17.628v5.538"
      />
    </svg>
  );
});

CoinRegular.displayName = "CoinRegular";

export default CoinRegular;
