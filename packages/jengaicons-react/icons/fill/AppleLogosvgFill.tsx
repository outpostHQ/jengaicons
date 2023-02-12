import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AppleLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.71 6.837a3.766 3.766 0 0 1 3.514-2.413"
        />
        <path
          fill={color || "#000000"}
          d="M28.167 22.181c-1.48 3.614-4.166 6.243-6.413 6.243h-8.47c-3.295 0-7.53-5.647-7.53-11.764a7.06 7.06 0 0 1 11.765-5.261 7.06 7.06 0 0 1 10.255.898 5.65 5.65 0 0 0 .392 9.884Z"
        />
      </svg>
    );
  }
);

AppleLogosvgFill.displayName = "AppleLogosvgFill";

export default AppleLogosvgFill;
