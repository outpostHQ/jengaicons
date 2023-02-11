import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LaddersvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.142 4.283H12.05M14.233 4.283l-8.727 24M14.233 28.283l8.727-24M9.474 17.374H18.2M11.846 10.828h8.728M7.087 23.92h8.728M21.324 8.783l7.09 19.5M17.015 20.646h8.618"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

LaddersvgFill.displayName = "LaddersvgFill";

export default LaddersvgFill;
