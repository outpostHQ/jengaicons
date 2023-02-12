import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TimerRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M16 28.5c5.608 0 10.154-4.546 10.154-10.154S21.608 8.192 16 8.192 5.846 12.738 5.846 18.346 10.392 28.5 16 28.5Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m16 18.346 4.57-4.569M13.23 4.5h5.54"
      />
    </svg>
  );
});

TimerRegular.displayName = "TimerRegular";

export default TimerRegular;
