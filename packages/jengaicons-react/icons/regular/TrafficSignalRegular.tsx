import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrafficSignalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 24a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM24 9h3M24 19h3M5 9h3M5 19h3"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 4h16v24H8z"
        />
      </svg>
    );
  }
);

TrafficSignalRegular.displayName = "TrafficSignalRegular";

export default TrafficSignalRegular;
