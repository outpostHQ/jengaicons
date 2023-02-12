import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AirplaneLandingRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.012 26.726h19.626M6.102 8.185a5 5 0 0 0 2.285 6.692l16.875 8.285 1.315-2.678a3 3 0 0 0-1.371-4.015l-5.64-2.768-1.717-6.283-2.962-1.454-.612 5.139-3.12-1.531-.493-2.987L7.62 5.092 6.102 8.185Z"
        />
      </svg>
    );
  }
);

AirplaneLandingRegular.displayName = "AirplaneLandingRegular";

export default AirplaneLandingRegular;
