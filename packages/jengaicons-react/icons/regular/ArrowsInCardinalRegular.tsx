import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsInCardinalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.79 20v8M11.547 24.243 15.789 20l4.243 4.243M11.547 7.757 15.789 12l4.243-4.243M15.79 4v8M19.79 15.553h8M24.032 11.31l-4.243 4.242 4.243 4.243M7.547 11.308l4.242 4.242-4.481 3.99M11.79 15.55h-8"
        />
      </svg>
    );
  }
);

ArrowsInCardinalRegular.displayName = "ArrowsInCardinalRegular";

export default ArrowsInCardinalRegular;
