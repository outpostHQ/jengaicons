import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberSixFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m11.91 17.533 6.717-11.25"
        />
        <circle
          cx="16.96"
          cy="20.45"
          r="5.833"
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

NumberSixFill.displayName = "NumberSixFill";

export default NumberSixFill;
