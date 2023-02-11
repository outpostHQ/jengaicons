import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BagRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M10.783 13.391V9.217a5.217 5.217 0 1 1 10.435 0v4.174"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M4.522 9.217h22.956V28H4.522z"
      />
    </svg>
  );
});

BagRegular.displayName = "BagRegular";

export default BagRegular;
