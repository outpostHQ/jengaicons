import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FlagRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.386 28V5.829M4.386 21.665c8.447-6.334 14.781 6.335 23.228 0V5.83c-8.447 6.334-14.781-6.335-23.228 0"
      />
    </svg>
  );
});

FlagRegular.displayName = "FlagRegular";

export default FlagRegular;
