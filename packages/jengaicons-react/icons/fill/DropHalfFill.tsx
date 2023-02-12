import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DropHalfFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M26.19 19.052c0-8.307-9.23-14.769-9.23-14.769s-9.231 6.462-9.231 14.77a9.23 9.23 0 0 0 18.462 0Z"
      />
      <path
        fill={color || "#000000"}
        d="M16.96 4.283s9.23 6.462 9.23 14.77a9.23 9.23 0 0 1-9.23 9.23v-24Z"
      />
    </svg>
  );
});

DropHalfFill.displayName = "DropHalfFill";

export default DropHalfFill;
