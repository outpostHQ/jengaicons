import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberTwoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.982 8.547a5.432 5.432 0 0 1 10.036 2.885c0 .758-.135 1.313-.599 2.104C19.956 14.328 10.982 26 10.982 26h10.036"
        />
      </svg>
    );
  }
);

NumberTwoRegular.displayName = "NumberTwoRegular";

export default NumberTwoRegular;
