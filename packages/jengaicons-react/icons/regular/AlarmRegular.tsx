import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlarmRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 10.715v6.6h6.6"
      />
      <path
        stroke={color || "#000000"}
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M16 27.685c5.728 0 10.37-4.643 10.37-10.37 0-5.728-4.642-10.371-10.37-10.371-5.728 0-10.37 4.643-10.37 10.37 0 5.728 4.642 10.371 10.37 10.371Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m24 5.315 4 4M4 9.315l4-4"
      />
    </svg>
  );
});

AlarmRegular.displayName = "AlarmRegular";

export default AlarmRegular;
