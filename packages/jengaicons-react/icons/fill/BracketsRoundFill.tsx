import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BracketsRoundFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.415 4.283s-5.455 3.273-5.455 12 5.455 12 5.455 12M23.505 4.283s5.455 3.273 5.455 12-5.455 12-5.455 12"
        />
      </svg>
    );
  }
);

BracketsRoundFill.displayName = "BracketsRoundFill";

export default BracketsRoundFill;
