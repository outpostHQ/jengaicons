import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FlowArrowFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M7.96 24.744a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.96 21.744h.857a5.143 5.143 0 0 0 5.143-5.143v0a5.143 5.143 0 0 1 5.143-5.143h6.857"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m25.323 7.822 3.637 3.636-3.637 3.637"
        />
      </svg>
    );
  }
);

FlowArrowFill.displayName = "FlowArrowFill";

export default FlowArrowFill;
