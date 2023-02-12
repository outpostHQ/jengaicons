import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WavesRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5 9.5s5-4 11 0 11 0 11 0M5 16.5s5-4 11 0 11 0 11 0M5 23.5s5-4 11 0 11 0 11 0"
      />
    </svg>
  );
});

WavesRegular.displayName = "WavesRegular";

export default WavesRegular;
