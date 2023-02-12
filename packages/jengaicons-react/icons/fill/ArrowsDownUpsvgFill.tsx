import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsDownUpsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.765 4.283v24M25.2 28.283v-24M20.931 8.603l4.218-4.268 4.217 4.268M5.497 23.963l4.217 4.268 4.217-4.268"
        />
      </svg>
    );
  }
);

ArrowsDownUpsvgFill.displayName = "ArrowsDownUpsvgFill";

export default ArrowsDownUpsvgFill;
