import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LineSegmentRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.273 28a3.273 3.273 0 1 0 0-6.545 3.273 3.273 0 0 0 0 6.545ZM24.727 10.546a3.273 3.273 0 1 0 0-6.546 3.273 3.273 0 0 0 0 6.546ZM22.413 9.587 9.587 22.413"
        />
      </svg>
    );
  }
);

LineSegmentRegular.displayName = "LineSegmentRegular";

export default LineSegmentRegular;
