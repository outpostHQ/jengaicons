import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FlagBannerFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 20.949h-24V5.276h24l-5.508 7.796 5.508 7.877Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.96 20.949h24l-5.508-7.877 5.508-7.796h-24V27.29"
        />
      </svg>
    );
  }
);

FlagBannerFill.displayName = "FlagBannerFill";

export default FlagBannerFill;
