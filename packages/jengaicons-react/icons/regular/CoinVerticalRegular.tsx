import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CoinVerticalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.625 16c0-6.627-2.48-12-5.539-12-3.059 0-5.538 5.373-5.538 12s2.48 12 5.538 12c3.059 0 5.539-5.373 5.539-12ZM18.625 16h5.538"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M13.377 28h4.906c1.24 0 2.474-.433 3.204-1.434 3.767-5.17 4.125-15.337.032-21.046C20.767 4.472 19.49 4 18.198 4h-4.821"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.483 8.615h5.538M17.483 23.384h5.538"
        />
      </svg>
    );
  }
);

CoinVerticalRegular.displayName = "CoinVerticalRegular";

export default CoinVerticalRegular;
