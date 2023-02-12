import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsOutSimplesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.81 4.432h6v6M20.386 12.858l8.425-8.426M4.96 22.283v6h6M13.386 19.858 4.96 28.283"
        />
      </svg>
    );
  }
);

ArrowsOutSimplesvgFill.displayName = "ArrowsOutSimplesvgFill";

export default ArrowsOutSimplesvgFill;
