import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BroadcastFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 19.71a3.427 3.427 0 1 0 0-6.854 3.427 3.427 0 0 0 0 6.854Z"
          fill="#1C1B1F"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.507 21.736a7.704 7.704 0 0 1 0-10.906M22.413 10.83a7.704 7.704 0 0 1 0 10.906M8.478 24.765a11.985 11.985 0 0 1 0-16.964M25.442 7.8a11.986 11.986 0 0 1 0 16.965"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

BroadcastFill.displayName = "BroadcastFill";

export default BroadcastFill;
