import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberTwoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.942 8.83a5.432 5.432 0 0 1 10.036 2.885c0 .758-.135 1.313-.599 2.104-.464.792-9.437 12.464-9.437 12.464h10.036"
        />
      </svg>
    );
  }
);

NumberTwoFill.displayName = "NumberTwoFill";

export default NumberTwoFill;
