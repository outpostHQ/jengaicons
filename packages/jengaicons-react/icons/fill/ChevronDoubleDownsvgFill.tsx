import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChevronDoubleDownsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m22.76 17.484-5.8 5.799-5.799-5.799M22.76 9.283l-5.8 5.799-5.799-5.799"
        />
      </svg>
    );
  }
);

ChevronDoubleDownsvgFill.displayName = "ChevronDoubleDownsvgFill";

export default ChevronDoubleDownsvgFill;
