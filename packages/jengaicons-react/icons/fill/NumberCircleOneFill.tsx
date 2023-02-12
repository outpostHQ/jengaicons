import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberCircleOneFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12Zm-10.574-6a1 1 0 0 0-1.537-.843l-3.068 1.954a1 1 0 1 0 1.074 1.687l1.531-.975v10.177a1 1 0 0 0 2 0v-12Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

NumberCircleOneFill.displayName = "NumberCircleOneFill";

export default NumberCircleOneFill;
