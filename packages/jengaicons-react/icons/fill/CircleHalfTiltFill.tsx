import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CircleHalfTiltFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.474 24.768c4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0-4.686 4.686-4.686 12.284 0 16.97Z"
        />
        <path
          fill={color || "#000000"}
          d="M8.475 24.768c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97l-16.97 16.97Z"
        />
      </svg>
    );
  }
);

CircleHalfTiltFill.displayName = "CircleHalfTiltFill";

export default CircleHalfTiltFill;
