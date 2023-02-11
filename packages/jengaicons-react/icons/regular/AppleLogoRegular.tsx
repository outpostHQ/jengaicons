import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AppleLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.75 6.412A3.766 3.766 0 0 1 21.264 4M27.207 21.757C25.727 25.37 23.04 28 20.794 28h-8.471c-3.294 0-7.53-5.647-7.53-11.765a7.059 7.059 0 0 1 11.765-5.26v-.001a7.059 7.059 0 0 1 10.255.898h0a5.65 5.65 0 0 0 .393 9.885h0Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

AppleLogoRegular.displayName = "AppleLogoRegular";

export default AppleLogoRegular;
