import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BracketsCurlyFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.153 7.767c-6.193 0 0 8.516-6.193 8.516 6.193 0 0 8.516 6.193 8.516M22.767 7.767c6.193 0 0 8.516 6.193 8.516-6.193 0 0 8.516-6.193 8.516"
        />
      </svg>
    );
  }
);

BracketsCurlyFill.displayName = "BracketsCurlyFill";

export default BracketsCurlyFill;
