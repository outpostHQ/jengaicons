import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignCenterVerticalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28 16h-2.403M4 16h2.459m11.515 0h-3.965"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6.59 25.913h7.318V6.087H6.59zM18.09 23.304h7.318V8.696H18.09z"
        />
      </svg>
    );
  }
);

AlignCenterVerticalRegular.displayName = "AlignCenterVerticalRegular";

export default AlignCenterVerticalRegular;
