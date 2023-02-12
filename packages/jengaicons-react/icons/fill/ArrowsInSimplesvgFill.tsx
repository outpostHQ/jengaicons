import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsInSimplesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.386 19.858h6v6M4.96 28.283l8.426-8.425M20.386 6.857v6h6M28.811 4.432l-8.425 8.425"
        />
      </svg>
    );
  }
);

ArrowsInSimplesvgFill.displayName = "ArrowsInSimplesvgFill";

export default ArrowsInSimplesvgFill;
