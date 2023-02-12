import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberSquareSevenFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.96 4.283a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1h-22Zm8.01 5a1 1 0 1 0 0 2h4.605l-3.458 10.692a1 1 0 0 0 1.903.616l3.881-12a1 1 0 0 0-.951-1.308h-5.98Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

NumberSquareSevenFill.displayName = "NumberSquareSevenFill";

export default NumberSquareSevenFill;
