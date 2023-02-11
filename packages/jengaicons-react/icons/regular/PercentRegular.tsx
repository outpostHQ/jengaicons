import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PercentRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.2 8.8 8.8 23.2"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8 13.6a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6ZM21.2 24a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
    );
  }
);

PercentRegular.displayName = "PercentRegular";

export default PercentRegular;
