import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WarningRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 13.917v4.617"
        />
        <path
          fill={color || "#000000"}
          d="M16 24.073a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16 5.608 12 20.784H4L16 5.608Z"
        />
      </svg>
    );
  }
);

WarningRegular.displayName = "WarningRegular";

export default WarningRegular;
