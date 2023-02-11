import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ForkKnifesvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          d="M11.71 4.283v5M11.71 14.783v13.5M15.21 4.283l1 6a4.5 4.5 0 0 1-9 0l1-6"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M26.71 20.283h-7s1.5-14 7-16v24" fill="#1C1B1F" />
        <path
          d="M26.71 20.283h-7s1.5-14 7-16v24"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ForkKnifesvgFill.displayName = "ForkKnifesvgFill";

export default ForkKnifesvgFill;
