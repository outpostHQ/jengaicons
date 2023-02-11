import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignCenterVerticalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          d="M28 16h-2.403M4 16h2.459m11.515 0h-3.965"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
          d="M6.59 25.913h7.318V6.087H6.59zM18.09 23.304h7.318V8.696H18.09z"
        />
      </svg>
    );
  }
);

AlignCenterVerticalRegular.displayName = "AlignCenterVerticalRegular";

export default AlignCenterVerticalRegular;
