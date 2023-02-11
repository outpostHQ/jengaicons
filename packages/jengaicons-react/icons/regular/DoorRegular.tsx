import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DoorRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size = 32 } = props;

  return (
    <svg
      style={{ width: size, height: size }}
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M4 27.077h24"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.23 17.385a1.385 1.385 0 1 0 0-2.77 1.385 1.385 0 0 0 0 2.77Z"
        fill="#1C1B1F"
      />
      <path
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M7.692 4.923h16.615v22.154H7.692z"
      />
    </svg>
  );
});

DoorRegular.displayName = "DoorRegular";

export default DoorRegular;
