import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HeartbeatRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.48 16h4.8l1.92-2.88 3.84 5.76L16.96 16h2.88"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.014 12.16A8.466 8.466 0 0 1 4 11.68a6.241 6.241 0 0 1 12-2.404h0a6.24 6.24 0 0 1 12 2.404c0 8.16-12 14.88-12 14.88s-4.793-2.684-8.321-6.72"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

HeartbeatRegular.displayName = "HeartbeatRegular";

export default HeartbeatRegular;
