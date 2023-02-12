import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SwatchesRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.06 24.915a1.542 1.542 0 1 0 0-3.084 1.542 1.542 0 0 0 0 3.084Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4h8.119v19.94a4.06 4.06 0 0 1-8.119 0V4Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.39 19.881H28V28H8.123"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m12.172 15.765 9.713-7.046 4.767 6.572-14.48 10.504-.912.643"
        />
      </svg>
    );
  }
);

SwatchesRegular.displayName = "SwatchesRegular";

export default SwatchesRegular;
