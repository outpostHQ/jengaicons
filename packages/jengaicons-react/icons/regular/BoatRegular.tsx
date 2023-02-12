import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BoatRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 6.772V4M16 20.63v-9.189"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4.913 15.264 11.136-3.823 11.038 3.823v4.73c0 4.308-5.174 6.275-10.894 7.964a.5.5 0 0 1-.287-.002C10.118 26.2 5.08 24.662 4.913 19.993c-.17-4.707 0-4.73 0-4.73Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M24.315 14.163V6.772H7.685v7.391"
      />
    </svg>
  );
});

BoatRegular.displayName = "BoatRegular";

export default BoatRegular;
