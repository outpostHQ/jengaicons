import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StripeLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.635 19.57c0 1.972 2.402 3.57 5.365 3.57s5.366-1.598 5.366-3.57c0-4.76-10.433-2.975-10.433-7.14 0-1.972 2.104-3.57 5.067-3.57 2.223 0 3.962.899 4.692 2.18"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          rx=".5"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

StripeLogoRegular.displayName = "StripeLogoRegular";

export default StripeLogoRegular;
