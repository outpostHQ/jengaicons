import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberSquareSixFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 5.283a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1v-22Zm13.512 4.141a1 1 0 0 1 .346 1.371l-2.085 3.494a4.5 4.5 0 1 1-3.578 2.092L17.1 9.77a1 1 0 0 1 1.371-.346Zm-3.695 8.14a2.5 2.5 0 1 0 .075-.126l-.064.108-.011.018Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

NumberSquareSixFill.displayName = "NumberSquareSixFill";

export default NumberSquareSixFill;
