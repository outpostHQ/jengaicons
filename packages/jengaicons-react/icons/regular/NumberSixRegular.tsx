import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberSixRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.95 17.25 17.666 6"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="16"
          cy="20.167"
          r="5.833"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

NumberSixRegular.displayName = "NumberSixRegular";

export default NumberSixRegular;
