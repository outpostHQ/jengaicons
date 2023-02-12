import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PrescriptionRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m12.727 16 12 12M24.727 20.364 17.091 28"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M7.273 16h6.545a6 6 0 0 0 6-6v0a6 6 0 0 0-6-6H7.335a.062.062 0 0 0-.062.062v20.776"
        />
      </svg>
    );
  }
);

PrescriptionRegular.displayName = "PrescriptionRegular";

export default PrescriptionRegular;
