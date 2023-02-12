import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberNineFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m22.011 15.033-6.743 11.25M16.96 17.95a5.833 5.833 0 1 0 0-11.667 5.833 5.833 0 0 0 0 11.667Z"
        />
      </svg>
    );
  }
);

NumberNineFill.displayName = "NumberNineFill";

export default NumberNineFill;
