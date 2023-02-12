import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberEightRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.882 10.583a4.433 4.433 0 0 1-1.43 3.241 5.11 5.11 0 0 1-6.904 0 4.389 4.389 0 0 1 0-6.482 5.11 5.11 0 0 1 6.904 0 4.435 4.435 0 0 1 1.43 3.241v0Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21.77 20.583a5.24 5.24 0 0 1-1.69 3.83 6.038 6.038 0 0 1-8.16 0 5.187 5.187 0 0 1 0-7.66 6.038 6.038 0 0 1 8.16 0 5.24 5.24 0 0 1 1.69 3.83Z"
        />
      </svg>
    );
  }
);

NumberEightRegular.displayName = "NumberEightRegular";

export default NumberEightRegular;
