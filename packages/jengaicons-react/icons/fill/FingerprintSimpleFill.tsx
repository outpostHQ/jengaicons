import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FingerprintSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.22 16.463a28.616 28.616 0 0 1-2.144 10.906m.682-14.732a5.74 5.74 0 0 0-10.017 3.826 17.142 17.142 0 0 1-2.15 8.339m4.063-19.165A11.488 11.488 0 0 1 28.96 16.463a34.558 34.558 0 0 1-.853 7.653M4.96 21.246A11.437 11.437 0 0 0 6 16.463a11.45 11.45 0 0 1 3.827-8.556m5.57 18.123a22.823 22.823 0 0 1-.785 1.552m2.867-11.119a22.998 22.998 0 0 1-.723 5.74"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

FingerprintSimpleFill.displayName = "FingerprintSimpleFill";

export default FingerprintSimpleFill;
