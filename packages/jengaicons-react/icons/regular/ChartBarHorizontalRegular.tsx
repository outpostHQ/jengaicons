import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChartBarHorizontalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.92 4v24"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M26.08 19.36v-6.72H5.92v6.72zM20.32 12.64V5.92H5.92v6.72zM14.56 26.08v-6.72H5.92v6.72z"
        />
      </svg>
    );
  }
);

ChartBarHorizontalRegular.displayName = "ChartBarHorizontalRegular";

export default ChartBarHorizontalRegular;
