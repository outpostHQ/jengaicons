import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CaretLeftFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.313 15.93 22.106 5.136a.5.5 0 0 1 .854.353v21.586a.5.5 0 0 1-.854.353L11.313 16.637a.5.5 0 0 1 0-.708Z"
        />
      </svg>
    );
  }
);

CaretLeftFill.displayName = "CaretLeftFill";

export default CaretLeftFill;
