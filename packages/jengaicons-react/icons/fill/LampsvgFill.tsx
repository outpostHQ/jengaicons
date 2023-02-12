import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LampsvgFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 18.876v6.915M13.502 25.791h6.915M24.74 18.876v4.322"
      />
      <path
        fill={color || "#000000"}
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.146 6.775h13.628l5.186 12.101h-24l5.186-12.101Z"
      />
    </svg>
  );
});

LampsvgFill.displayName = "LampsvgFill";

export default LampsvgFill;
