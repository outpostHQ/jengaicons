import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DoorRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4 27.077h24"
      />
      <path
        fill={color || "#000000"}
        d="M19.23 17.385a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.692 4.923h16.615v22.154H7.692z"
      />
    </svg>
  );
});

DoorRegular.displayName = "DoorRegular";

export default DoorRegular;
