import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsOutLineHorizontalsvgFill = forwardRef<
  SVGSVGElement,
  JengaIconProps
>((props, ref) => {
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
        d="M16.96 6.283v20M4.811 16.283h8M9.054 12.038l-4.243 4.243 4.243 4.243M24.688 12.038l4.243 4.243-4.482 3.99M28.688 16.281h-8"
      />
    </svg>
  );
});

ArrowsOutLineHorizontalsvgFill.displayName = "ArrowsOutLineHorizontalsvgFill";

export default ArrowsOutLineHorizontalsvgFill;
