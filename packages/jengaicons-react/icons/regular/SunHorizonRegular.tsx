import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SunHorizonRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m12.229 9.937-.825-1.982M6.893 15.273l-1.982-.825M25.107 15.273l1.982-.825M19.771 9.937l.825-1.982M28 20.759H4M24.571 25.045H7.43M9.807 20.759a6.429 6.429 0 1 1 12.386 0"
        />
      </svg>
    );
  }
);

SunHorizonRegular.displayName = "SunHorizonRegular";

export default SunHorizonRegular;
