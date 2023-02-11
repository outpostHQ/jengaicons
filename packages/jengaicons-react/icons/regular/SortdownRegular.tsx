import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SortdownRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m16.353 4.354 8.958 8.957a.5.5 0 0 1-.354.854H7.042a.5.5 0 0 1-.353-.854l8.957-8.957a.5.5 0 0 1 .707 0Z"
          stroke="#C9C5CA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.646 27.646 6.69 18.69a.5.5 0 0 1 .353-.854h17.915a.5.5 0 0 1 .354.854l-8.957 8.957a.5.5 0 0 1-.708 0Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SortdownRegular.displayName = "SortdownRegular";

export default SortdownRegular;
