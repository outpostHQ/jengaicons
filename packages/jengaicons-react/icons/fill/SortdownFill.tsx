import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SortdownFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fill={color || "#000000"}
        d="m16.814 4.637 8.957 8.957a.5.5 0 0 1-.353.854H7.502a.5.5 0 0 1-.353-.854l8.958-8.957a.5.5 0 0 1 .707 0Z"
      />
      <path
        fill={color || "#000000"}
        d="m16.107 27.93-8.958-8.958a.5.5 0 0 1 .354-.854h17.915a.5.5 0 0 1 .353.854l-8.957 8.957a.5.5 0 0 1-.707 0Z"
      />
    </svg>
  );
});

SortdownFill.displayName = "SortdownFill";

export default SortdownFill;
