import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberFiveRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.733 23.912C11.813 25.181 13.491 26 15.377 26c3.252 0 5.89-2.43 5.89-5.43 0-2.998-2.638-5.428-5.89-5.428a6.173 6.173 0 0 0-3.774 1.26c-.217.167-.421.35-.61.543L12.887 6h8.378"
        />
      </svg>
    );
  }
);

NumberFiveRegular.displayName = "NumberFiveRegular";

export default NumberFiveRegular;
