import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BroadcastFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16.96 19.71a3.427 3.427 0 1 0 0-6.854 3.427 3.427 0 0 0 0 6.854Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.507 21.736a7.704 7.704 0 0 1 0-10.906M22.413 10.83a7.704 7.704 0 0 1 0 10.906M8.478 24.765a11.985 11.985 0 0 1 0-16.964M25.442 7.8a11.986 11.986 0 0 1 0 16.965"
        />
      </svg>
    );
  }
);

BroadcastFill.displayName = "BroadcastFill";

export default BroadcastFill;
