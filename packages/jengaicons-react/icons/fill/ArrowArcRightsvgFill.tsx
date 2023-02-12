import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowArcRightsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 22.283c0-2.373.69-4.694 1.982-6.667a11.817 11.817 0 0 1 5.28-4.42 11.546 11.546 0 0 1 6.795-.682 11.692 11.692 0 0 1 6.023 3.284l3.92 4"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28.96 11.798v6h-6"
        />
      </svg>
    );
  }
);

ArrowArcRightsvgFill.displayName = "ArrowArcRightsvgFill";

export default ArrowArcRightsvgFill;
