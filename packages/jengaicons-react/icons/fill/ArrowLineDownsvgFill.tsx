import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowLineDownsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.96 27.711h20M12.717 19.468l4.243 4.243 4.243-4.243M16.96 4.855V23.71"
        />
      </svg>
    );
  }
);

ArrowLineDownsvgFill.displayName = "ArrowLineDownsvgFill";

export default ArrowLineDownsvgFill;
