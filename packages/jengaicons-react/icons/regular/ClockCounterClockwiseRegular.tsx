import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ClockCounterClockwiseRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.532 10.245V16.5M21.95 19.628 16.531 16.5M8.423 24.609a11.468 11.468 0 1 0 0-16.218L4 12.814"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.521 12.814H4V6.293"
        />
      </svg>
    );
  }
);

ClockCounterClockwiseRegular.displayName = "ClockCounterClockwiseRegular";

export default ClockCounterClockwiseRegular;
