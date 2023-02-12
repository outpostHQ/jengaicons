import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PopcornRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.004 13.013 13.003 28M20.996 13.013 18.998 28M26.99 11.514a4.497 4.497 0 0 0-6.606-3.972 4.484 4.484 0 0 0-8.768 0 4.496 4.496 0 0 0-6.606 3.972"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m7.977 27.921-3.57-16.255a.1.1 0 0 1 .118-.12l6.569 1.398a.1.1 0 0 0 .055-.004l4.675-1.718a.1.1 0 0 1 .066-.001l5.04 1.72a.099.099 0 0 0 .053.003l6.49-1.397a.1.1 0 0 1 .119.12l-3.76 16.255a.1.1 0 0 1-.097.078H8.075a.1.1 0 0 1-.098-.079Z"
        />
      </svg>
    );
  }
);

PopcornRegular.displayName = "PopcornRegular";

export default PopcornRegular;
