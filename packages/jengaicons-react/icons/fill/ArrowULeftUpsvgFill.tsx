import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowULeftUpsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26.081 10.283v11a7 7 0 0 1-7 7h0a7.001 7.001 0 0 1-7-7v-17"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m7.839 8.526 4.242-4.243 4.243 4.243"
        />
      </svg>
    );
  }
);

ArrowULeftUpsvgFill.displayName = "ArrowULeftUpsvgFill";

export default ArrowULeftUpsvgFill;
