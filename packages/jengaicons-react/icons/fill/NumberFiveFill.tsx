import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberFiveFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.694 24.195c1.078 1.27 2.757 2.088 4.643 2.088 3.253 0 5.89-2.43 5.89-5.43 0-2.998-2.637-5.429-5.89-5.429a6.174 6.174 0 0 0-3.773 1.26c-.218.168-.422.35-.611.544l1.895-10.945h8.379"
        />
      </svg>
    );
  }
);

NumberFiveFill.displayName = "NumberFiveFill";

export default NumberFiveFill;
