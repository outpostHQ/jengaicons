import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BehanceLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.73 19.198a4.615 4.615 0 0 0 7.798 3.342m-7.798-3.342a4.615 4.615 0 0 1 9.204-.5c.03.275-.198.5-.474.5h-8.73Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20.652 10.882h7.385"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.96 9.084c0-.027.022-.048.048-.048h6.187a3.451 3.451 0 0 1 0 6.903H5.008a.048.048 0 0 1-.048-.049V9.084Z"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
        <path
          d="M4.96 15.996c0-.032.026-.058.058-.058h7.547a3.933 3.933 0 1 1 0 7.866H5.018a.057.057 0 0 1-.058-.056v-7.752Z"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

BehanceLogosvgFill.displayName = "BehanceLogosvgFill";

export default BehanceLogosvgFill;
