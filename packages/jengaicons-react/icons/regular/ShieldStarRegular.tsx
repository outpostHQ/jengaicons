import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShieldStarRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M16 10v5M11.25 13.45 16 15M13.063 19.05 16 15M18.938 19.05 16 15M20.75 13.45 16 15"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.424 14.627V4H4.576v10.627C4.576 21.692 8.639 24.238 16 28c7.176-3.298 11.424-6.122 11.424-13.373Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ShieldStarRegular.displayName = "ShieldStarRegular";

export default ShieldStarRegular;
