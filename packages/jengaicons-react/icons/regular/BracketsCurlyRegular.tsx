import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BracketsCurlyRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.194 7.484C4 7.484 10.194 16 4 16c6.194 0 0 8.516 6.194 8.516M21.806 7.484C28 7.484 21.806 16 28 16c-6.194 0 0 8.516-6.194 8.516"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

BracketsCurlyRegular.displayName = "BracketsCurlyRegular";

export default BracketsCurlyRegular;
