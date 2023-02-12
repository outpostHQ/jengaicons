import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ForkKnifesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.71 4.283v5M11.71 14.783v13.5M15.21 4.283l1 6a4.5 4.5 0 0 1-9 0l1-6"
        />
        <path fill={color || "#000000"} d="M26.71 20.283h-7s1.5-14 7-16v24" />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M26.71 20.283h-7s1.5-14 7-16v24"
        />
      </svg>
    );
  }
);

ForkKnifesvgFill.displayName = "ForkKnifesvgFill";

export default ForkKnifesvgFill;
