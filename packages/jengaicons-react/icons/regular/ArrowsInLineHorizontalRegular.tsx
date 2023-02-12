import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsInLineHorizontalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.79 6v20M18.79 16h8M23.032 11.755l-4.243 4.243 4.243 4.243M8.547 11.755l4.242 4.243-4.481 3.99M12.79 15.998h-8"
        />
      </svg>
    );
  }
);

ArrowsInLineHorizontalRegular.displayName = "ArrowsInLineHorizontalRegular";

export default ArrowsInLineHorizontalRegular;
