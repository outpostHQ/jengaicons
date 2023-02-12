import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WaveSineFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        strokeWidth="2"
        d="m6.96 16.96 2.554-4.015c1.176-1.847 3.87-1.854 5.054-.013l4.97 7.723c1.181 1.835 3.866 1.835 5.046-.001l2.376-3.695"
      />
    </svg>
  );
});

WaveSineFill.displayName = "WaveSineFill";

export default WaveSineFill;
