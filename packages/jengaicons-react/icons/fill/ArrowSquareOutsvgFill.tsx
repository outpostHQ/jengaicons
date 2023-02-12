import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowSquareOutsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26.96 17.783v8.5h-20v-20h8.5M20.96 6.283h6v6M18.96 14.283l8-8"
        />
      </svg>
    );
  }
);

ArrowSquareOutsvgFill.displayName = "ArrowSquareOutsvgFill";

export default ArrowSquareOutsvgFill;
