import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpiralFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.48 16.763a.96.96 0 0 1 .96.96 1.92 1.92 0 0 1-1.92 1.92 2.867 2.867 0 0 1-2.88-2.88 3.84 3.84 0 0 1 3.84-3.84 4.8 4.8 0 0 1 4.8 4.8 5.76 5.76 0 0 1-5.76 5.76 6.72 6.72 0 0 1-6.72-6.72 7.692 7.692 0 0 1 7.68-7.68 8.64 8.64 0 0 1 8.64 8.64 9.6 9.6 0 0 1-9.6 9.6 10.56 10.56 0 0 1-10.56-10.56 11.52 11.52 0 0 1 11.52-11.52 12.48 12.48 0 0 1 12.48 12.48"
      />
    </svg>
  );
});

SpiralFill.displayName = "SpiralFill";

export default SpiralFill;
