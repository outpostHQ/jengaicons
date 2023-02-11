import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StudentFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M6.046 8.283v10"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m16.96 12.283 12-4.123-12-3.877-12 3.877 12 4.123Z"
        fill="#1C1B1F"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12.812 11.137a6.208 6.208 0 1 0 8.046 0"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.511 28.283c.237-2.021 2.423-6.092 9.277-6.206 6.854-.114 9.084 4.09 9.342 6.206"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

StudentFill.displayName = "StudentFill";

export default StudentFill;
