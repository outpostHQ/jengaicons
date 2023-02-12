import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HardDriveFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          d="M5.96 9.821a1 1 0 0 0-1 1v10.923a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V10.821a1 1 0 0 0-1-1h-22Zm19.308 6.462a1.385 1.385 0 1 1-2.77 0 1.385 1.385 0 0 1 2.77 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

HardDriveFill.displayName = "HardDriveFill";

export default HardDriveFill;
