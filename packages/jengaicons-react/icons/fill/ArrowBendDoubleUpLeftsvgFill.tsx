import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowBendDoubleUpLeftsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 24.404a12 12 0 0 0-12-12h-6"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m15.203 8.162-4.243 4.242 4.243 4.243M9.203 8.162 4.96 12.404l4.243 4.243"
        />
      </svg>
    );
  }
);

ArrowBendDoubleUpLeftsvgFill.displayName = "ArrowBendDoubleUpLeftsvgFill";

export default ArrowBendDoubleUpLeftsvgFill;
