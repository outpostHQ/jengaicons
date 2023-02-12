import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const RadioFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.96 11.283a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1h-22Zm2 4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Zm13 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm-7-1a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2h-4Zm-1 5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1Z"
        clip-rule="evenodd"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.457 7.283h17.006v4H8.457z"
      />
    </svg>
  );
});

RadioFill.displayName = "RadioFill";

export default RadioFill;
