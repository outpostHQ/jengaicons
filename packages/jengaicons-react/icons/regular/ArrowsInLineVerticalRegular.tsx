import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsInLineVerticalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26 16H6M16 19v8M11.757 23.243 16 19l4.243 4.243M11.757 8.757 16 13l4.243-4.243M16 5v8"
        />
      </svg>
    );
  }
);

ArrowsInLineVerticalRegular.displayName = "ArrowsInLineVerticalRegular";

export default ArrowsInLineVerticalRegular;
