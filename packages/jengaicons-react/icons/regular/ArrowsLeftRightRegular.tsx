import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsLeftRightRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 24.354h24M28 8.97H4M8.293 4.779 4 8.971l4.293 4.191M23.707 20.162 28 24.354l-4.293 4.191"
        />
      </svg>
    );
  }
);

ArrowsLeftRightRegular.displayName = "ArrowsLeftRightRegular";

export default ArrowsLeftRightRegular;
