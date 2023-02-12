import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const XSquareFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        d="M5.96 4.283a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22a1 1 0 0 0-1-1h-22Zm15.707 7.293a1 1 0 0 1 0 1.414l-3.293 3.293 3.293 3.293a1 1 0 0 1-1.414 1.414l-3.293-3.293-3.293 3.293a1 1 0 0 1-1.414-1.414l3.293-3.293-3.293-3.293a1 1 0 1 1 1.414-1.414l3.293 3.293 3.293-3.293a1 1 0 0 1 1.414 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

XSquareFill.displayName = "XSquareFill";

export default XSquareFill;
