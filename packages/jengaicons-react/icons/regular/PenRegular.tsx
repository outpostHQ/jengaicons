import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PenRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        strokeLinejoin="round"
        strokeWidth="2"
        d="m21.51 3.985 6.494 6.493L13.83 24.651l-6.493-6.493L21.511 3.985Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7.35 18.217-.42 6.287 6.852.17"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="m18.171 7.35 6.379 6.379a.5.5 0 0 1 .13.226l.872 3.318a.5.5 0 0 1-.13.481l-4.47 4.47"
      />
    </svg>
  );
});

PenRegular.displayName = "PenRegular";

export default PenRegular;
