import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChevronCircleDoubleUpsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          d="M16.96 28.283c6.628 0 12-5.373 12-12s-5.372-12-12-12c-6.627 0-12 5.373-12 12s5.373 12 12 12Zm-.707-17.829a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1-1.414 1.414l-3.536-3.535-3.535 3.535a1 1 0 0 1-1.415-1.414l4.243-4.242Zm5.657 11.657a1 1 0 0 0 0-1.414l-4.243-4.242a1 1 0 0 0-1.414 0l-4.243 4.242a1 1 0 0 0 1.415 1.414l3.535-3.535 3.536 3.535a1 1 0 0 0 1.414 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ChevronCircleDoubleUpsvgFill.displayName = "ChevronCircleDoubleUpsvgFill";

export default ChevronCircleDoubleUpsvgFill;
