import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowFatLineLeftsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 5.49a.5.5 0 0 0-.853-.354L5.314 15.93a.5.5 0 0 0 0 .708l10.793 10.792a.5.5 0 0 0 .853-.353v-4.293a.5.5 0 0 1 .5-.5h7a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 1-.5-.5V5.49Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28.96 22.283v-12"
        />
      </svg>
    );
  }
);

ArrowFatLineLeftsvgFill.displayName = "ArrowFatLineLeftsvgFill";

export default ArrowFatLineLeftsvgFill;
