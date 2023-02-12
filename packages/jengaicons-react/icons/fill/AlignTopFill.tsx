import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignTopFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M28.96 4.283h-24"
      />
      <rect
        width="7.318"
        height="19.826"
        x="7.55"
        y="8.457"
        fill={color || "#000000"}
        rx="1"
      />
      <rect
        width="7.318"
        height="14.608"
        x="19.05"
        y="8.457"
        fill={color || "#000000"}
        rx="1"
      />
    </svg>
  );
});

AlignTopFill.displayName = "AlignTopFill";

export default AlignTopFill;
