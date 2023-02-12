import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ForkKnifeRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.75 4v5M10.75 14.5V28M14.25 4l1 6a4.5 4.5 0 1 1-9 0l1-6M25.75 20h-7s1.5-14 7-16v24"
        />
      </svg>
    );
  }
);

ForkKnifeRegular.displayName = "ForkKnifeRegular";

export default ForkKnifeRegular;
