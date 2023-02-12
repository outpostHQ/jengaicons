import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChevronCircleDownsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12s5.373-12 12-12c6.628 0 12 5.373 12 12Zm-6.293-.798-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414l4.293 4.293 4.293-4.293a1 1 0 0 1 1.414 1.414Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ChevronCircleDownsvgFill.displayName = "ChevronCircleDownsvgFill";

export default ChevronCircleDownsvgFill;
