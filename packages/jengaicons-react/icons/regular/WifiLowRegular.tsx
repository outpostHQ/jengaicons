import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WifiLowRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.911 14.142a5.92 5.92 0 0 1 8.178 0"
        />
        <path
          fill={color || "#000000"}
          d="M16 19.497a1.399 1.399 0 1 0 0-2.798 1.399 1.399 0 0 0 0 2.798Z"
        />
      </svg>
    );
  }
);

WifiLowRegular.displayName = "WifiLowRegular";

export default WifiLowRegular;
