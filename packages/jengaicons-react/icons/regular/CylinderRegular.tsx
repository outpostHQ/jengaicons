import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CylinderRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 11.72c4.013 0 7.265-1.729 7.265-3.86C23.265 5.728 20.013 4 16 4c-4.012 0-7.265 1.728-7.265 3.86 0 2.131 3.253 3.86 7.265 3.86Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M8.735 7.86v16.33c0 .879.371 1.736 1.115 2.203 3.598 2.257 8.516 2.026 12.153-.002.827-.461 1.262-1.374 1.262-2.32V7.86"
        />
      </svg>
    );
  }
);

CylinderRegular.displayName = "CylinderRegular";

export default CylinderRegular;
