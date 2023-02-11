import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberSquareFiveRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19 10h-5.02L13 16.025a3.5 3.5 0 1 1 0 4.95"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M4 4h24v24H4z"
        />
      </svg>
    );
  }
);

NumberSquareFiveRegular.displayName = "NumberSquareFiveRegular";

export default NumberSquareFiveRegular;
