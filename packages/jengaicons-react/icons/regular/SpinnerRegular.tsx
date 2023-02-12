import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpinnerRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 4v4M24.485 7.515l-2.828 2.828M28 16h-4M24.485 24.485l-2.828-2.828M16 28v-4M7.515 24.485l2.828-2.828M4 16h4M7.515 7.515l2.828 2.828"
        />
      </svg>
    );
  }
);

SpinnerRegular.displayName = "SpinnerRegular";

export default SpinnerRegular;
