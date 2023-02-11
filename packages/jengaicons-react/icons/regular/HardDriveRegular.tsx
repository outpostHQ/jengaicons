import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HardDriveRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.923 17.385a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77Z"
          fill="#1C1B1F"
        />
        <path
          d="M4 9.538h24v12.924H4V9.538Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

HardDriveRegular.displayName = "HardDriveRegular";

export default HardDriveRegular;
