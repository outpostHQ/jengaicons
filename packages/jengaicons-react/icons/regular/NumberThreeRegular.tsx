import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberThreeRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.188 25.567a6.536 6.536 0 0 0 11.624-4.102c0-3.61-3.932-6.536-7.541-6.536L21.812 4H10.188"
        />
      </svg>
    );
  }
);

NumberThreeRegular.displayName = "NumberThreeRegular";

export default NumberThreeRegular;
