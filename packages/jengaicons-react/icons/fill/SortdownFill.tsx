import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SortdownFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m16.814 4.637 8.957 8.957a.5.5 0 0 1-.353.854H7.502a.5.5 0 0 1-.353-.854l8.958-8.957a.5.5 0 0 1 .707 0Z"
        fill="#C9C5CA"
      />
      <path
        d="m16.107 27.93-8.958-8.958a.5.5 0 0 1 .354-.854h17.915a.5.5 0 0 1 .353.854l-8.957 8.957a.5.5 0 0 1-.707 0Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

SortdownFill.displayName = "SortdownFill";

export default SortdownFill;
