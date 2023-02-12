import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CirclesThreePlusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.87 14.101a4.909 4.909 0 1 0 0-9.818 4.909 4.909 0 0 0 0 9.818ZM24.05 14.101a4.91 4.91 0 1 0 0-9.818 4.91 4.91 0 0 0 0 9.818ZM9.87 28.283a4.91 4.91 0 1 0-.001-9.818 4.91 4.91 0 0 0 0 9.818Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M24.05 19.556v7.636M27.87 23.374h-7.637"
        />
      </svg>
    );
  }
);

CirclesThreePlusFill.displayName = "CirclesThreePlusFill";

export default CirclesThreePlusFill;
