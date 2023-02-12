import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CalculatorRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          d="M11 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM11 25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21 25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 4h20v24H6z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 8h12v6H10z"
        />
      </svg>
    );
  }
);

CalculatorRegular.displayName = "CalculatorRegular";

export default CalculatorRegular;
