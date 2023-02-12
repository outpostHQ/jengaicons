import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const YinYangFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 28.283c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12Z"
      />
      <path
        fill={color || "#000000"}
        d="M16.96 11.783a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        fill={color || "#000000"}
        fillRule="evenodd"
        d="M22.96 10.283a6 6 0 0 1-6 6 6 6 0 0 0 0 12c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12a6 6 0 0 1 6 6Zm-4.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

YinYangFill.displayName = "YinYangFill";

export default YinYangFill;
