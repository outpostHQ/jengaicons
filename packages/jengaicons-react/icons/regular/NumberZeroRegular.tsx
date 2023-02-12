import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberZeroRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 26c3.823 0 6.923-4.477 6.923-10S19.823 6 16 6s-6.923 4.477-6.923 10 3.1 10 6.923 10Z"
        />
      </svg>
    );
  }
);

NumberZeroRegular.displayName = "NumberZeroRegular";

export default NumberZeroRegular;
