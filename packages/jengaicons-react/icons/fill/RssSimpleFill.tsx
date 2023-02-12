import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RssSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.423 6.283A18.537 18.537 0 0 1 26.96 24.82M8.423 15.063a9.755 9.755 0 0 1 9.756 9.757"
        />
        <path
          fill={color || "#000000"}
          d="M8.423 26.283a1.463 1.463 0 1 0 0-2.927 1.463 1.463 0 0 0 0 2.927Z"
        />
      </svg>
    );
  }
);

RssSimpleFill.displayName = "RssSimpleFill";

export default RssSimpleFill;
