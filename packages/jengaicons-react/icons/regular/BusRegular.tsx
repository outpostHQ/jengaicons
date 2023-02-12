import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BusRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.783 14.435h22.434"
      />
      <path
        fill={color || "#000000"}
        d="M10.26 20.696a1.565 1.565 0 1 0 0-3.13 1.565 1.565 0 0 0 0 3.13ZM21.74 20.696a1.565 1.565 0 1 0 0-3.13 1.565 1.565 0 0 0 0 3.13Z"
      />
      <path
        stroke={color || "#000000"}
        strokeWidth="2"
        d="M4.783 9a5 5 0 0 1 5-5h12.434a5 5 0 0 1 5 5v14.826H4.783V9Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.783 23.826V28H10v-4.174M22 23.826V28h5.217v-4.174"
      />
    </svg>
  );
});

BusRegular.displayName = "BusRegular";

export default BusRegular;
