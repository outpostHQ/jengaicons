import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberSquareNineFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 5.283a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1v-22Zm15.823 11.375a4.5 4.5 0 1 0-3.596 2.12l-2.086 3.492a1 1 0 1 0 1.717 1.026l3.965-6.638Zm-1.7-1.054.049-.082a2.5 2.5 0 1 0-.049.082Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

NumberSquareNineFill.displayName = "NumberSquareNineFill";

export default NumberSquareNineFill;
