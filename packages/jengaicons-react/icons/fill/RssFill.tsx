import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RssFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M7.913 17.712a7.619 7.619 0 0 1 7.619 7.619M7.913 11.997a13.334 13.334 0 0 1 13.333 13.334"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.913 6.283A19.048 19.048 0 0 1 26.96 25.33"
      />
      <path
        fill={color || "#000000"}
        d="M8.389 26.283a1.429 1.429 0 1 0 0-2.857 1.429 1.429 0 0 0 0 2.857Z"
      />
    </svg>
  );
});

RssFill.displayName = "RssFill";

export default RssFill;
