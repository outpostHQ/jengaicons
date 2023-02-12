import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChartPieSliceRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.002 16V4M26.395 10 5.61 22M16.002 4A12 12 0 1 1 5.654 22.08"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.987 4.687C7.333 6.36 4 10.86 4 16.15c0 .697.058 1.38.169 2.045l7.818-4.504V4.687Z"
        />
      </svg>
    );
  }
);

ChartPieSliceRegular.displayName = "ChartPieSliceRegular";

export default ChartPieSliceRegular;
