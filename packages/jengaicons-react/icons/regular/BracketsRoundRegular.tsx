import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BracketsRoundRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.455 4S4 7.273 4 16s5.455 12 5.455 12M22.545 4S28 7.273 28 16s-5.455 12-5.455 12"
        />
      </svg>
    );
  }
);

BracketsRoundRegular.displayName = "BracketsRoundRegular";

export default BracketsRoundRegular;
