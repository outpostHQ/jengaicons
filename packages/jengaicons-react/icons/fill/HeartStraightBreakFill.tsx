import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HeartStraightBreakFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          d="m16.122 8.846-.638-.644c-2.315-2.303-6.1-2.64-8.52-.463a6.019 6.019 0 0 0-.243 8.739l9.62 9.619a.938.938 0 0 0 1.319 0l9.375-9.376c2.304-2.315 2.64-6.1.463-8.52a6.018 6.018 0 0 0-7.397-1.252l-3.625 4.72 3.083 3.083a1 1 0 0 1 0 1.415l-1.852 1.852a1 1 0 0 1-1.414-1.415l1.145-1.144-2.997-2.997a1 1 0 0 1-.086-1.317l1.767-2.3Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

HeartStraightBreakFill.displayName = "HeartStraightBreakFill";

export default HeartStraightBreakFill;
