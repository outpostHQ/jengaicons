import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RobotRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M18.5 23.269h-5M16 10.143V6.4"
      />
      <path
        fill={color || "#000000"}
        d="M10.5 17.769a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21.5 17.769a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 8.272a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z"
      />
      <rect
        width="24"
        height="17.752"
        x="4"
        y="10.143"
        stroke={color || "#000000"}
        strokeWidth="2"
        rx="5"
      />
    </svg>
  );
});

RobotRegular.displayName = "RobotRegular";

export default RobotRegular;
