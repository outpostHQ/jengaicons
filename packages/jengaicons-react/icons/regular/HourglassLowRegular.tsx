import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HourglassLowRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7.75 28.5h16.5v-.812a10 10 0 0 0-4-8L16 16.5l-4.25 3.188a10 10 0 0 0-4 8v.812Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.396 24.5h15.208"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7.75 4.5h16.5v.812a10 10 0 0 1-4 8L16 16.5l-4.25-3.188a10 10 0 0 1-4-8V4.5Z"
        />
      </svg>
    );
  }
);

HourglassLowRegular.displayName = "HourglassLowRegular";

export default HourglassLowRegular;
