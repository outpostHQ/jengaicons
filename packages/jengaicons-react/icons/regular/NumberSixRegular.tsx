import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberSixRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.95 17.25 17.666 6"
        />
        <circle
          cx="16"
          cy="20.167"
          r="5.833"
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

NumberSixRegular.displayName = "NumberSixRegular";

export default NumberSixRegular;
