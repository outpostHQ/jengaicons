import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SearchsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.821 24.005a8.86 8.86 0 1 0 0-17.722 8.86 8.86 0 0 0 0 17.722ZM22.086 21.41l4.874 4.873"
        />
      </svg>
    );
  }
);

SearchsvgFill.displayName = "SearchsvgFill";

export default SearchsvgFill;
