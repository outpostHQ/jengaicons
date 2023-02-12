import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WarningOctagonRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 10v7"
        />
        <path
          fill={color || "#000000"}
          d="M16 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m28 11.045-.011 9.937L20.955 28l-9.937-.011L4 20.955l.011-9.937L11.045 4l9.937.011L28 11.045Z"
        />
      </svg>
    );
  }
);

WarningOctagonRegular.displayName = "WarningOctagonRegular";

export default WarningOctagonRegular;
