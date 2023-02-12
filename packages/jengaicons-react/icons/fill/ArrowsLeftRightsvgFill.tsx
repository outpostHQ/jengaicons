import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsLeftRightsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 24.636h24M28.96 9.253h-24M9.253 5.062 4.96 9.253l4.293 4.192M24.667 20.445l4.293 4.191-4.293 4.192"
        />
      </svg>
    );
  }
);

ArrowsLeftRightsvgFill.displayName = "ArrowsLeftRightsvgFill";

export default ArrowsLeftRightsvgFill;
