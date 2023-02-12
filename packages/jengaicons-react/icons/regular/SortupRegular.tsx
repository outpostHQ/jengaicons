import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SortupRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m16.353 4.354 8.958 8.957a.5.5 0 0 1-.354.854H7.042a.5.5 0 0 1-.353-.854l8.957-8.957a.5.5 0 0 1 .707 0Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.646 27.646 6.69 18.69a.5.5 0 0 1 .353-.854h17.915a.5.5 0 0 1 .354.854l-8.957 8.957a.5.5 0 0 1-.708 0Z"
        />
      </svg>
    );
  }
);

SortupRegular.displayName = "SortupRegular";

export default SortupRegular;
