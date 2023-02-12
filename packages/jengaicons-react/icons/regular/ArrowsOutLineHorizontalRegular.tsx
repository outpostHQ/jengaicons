import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsOutLineHorizontalRegular = forwardRef<
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
        d="M16 6v20M3.851 16h8M8.094 11.755 3.85 15.998l4.243 4.243M23.728 11.755l4.242 4.243-4.481 3.99M27.728 15.998h-8"
      />
    </svg>
  );
});

ArrowsOutLineHorizontalRegular.displayName = "ArrowsOutLineHorizontalRegular";

export default ArrowsOutLineHorizontalRegular;
