import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ConfettiFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M20.689 10.856s0-2.817 2.817-2.817 2.817-2.817 2.817-2.817M17.872 4.283V7.1M26.323 15.551 28.2 17.43M26.323 11.795l2.817-.939"
      />
      <path
        fill={color || "#000000"}
        fillRule="evenodd"
        d="m10.374 12.496 1.36-3.84a.5.5 0 0 1 .825-.188l12.109 12.035a.5.5 0 0 1-.186.826l-3.899 1.376-10.21-10.209Zm-.74 2.088-2.166 6.114 4.905 4.905 6.12-2.16-8.86-8.859Zm.649 11.757-3.555-3.555-1.598 4.51a.5.5 0 0 0 .638.639l4.515-1.594Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

ConfettiFill.displayName = "ConfettiFill";

export default ConfettiFill;
