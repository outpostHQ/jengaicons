import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HeartStraightBreakRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m16.7 25.814 9.375-9.376c2.304-2.315 2.64-6.1.463-8.519a6.02 6.02 0 0 0-8.739-.243l-1.76 1.77-1.515-1.527c-2.315-2.303-6.1-2.64-8.52-.463a6.019 6.019 0 0 0-.243 8.74l9.62 9.618a.938.938 0 0 0 1.319 0v0Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16.04 9.447-1.852 2.026 3.704 3.704-1.852 1.852"
        />
      </svg>
    );
  }
);

HeartStraightBreakRegular.displayName = "HeartStraightBreakRegular";

export default HeartStraightBreakRegular;
