import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowElbowUpRightsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.96 27.404v-18h18"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m21.718 5.162 4.242 4.242-4.242 4.243"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ArrowElbowUpRightsvgFill.displayName = "ArrowElbowUpRightsvgFill";

export default ArrowElbowUpRightsvgFill;
