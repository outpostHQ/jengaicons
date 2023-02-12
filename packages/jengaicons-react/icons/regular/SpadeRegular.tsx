import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpadeRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 4s11.538 7.385 11.538 13.385a6 6 0 0 1-9.85 4.6L19.691 28h-7.384l2.004-6.014a6 6 0 0 1-9.85-4.601C4.461 11.385 16 4 16 4Z"
      />
    </svg>
  );
});

SpadeRegular.displayName = "SpadeRegular";

export default SpadeRegular;
