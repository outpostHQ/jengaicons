import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ThumbsUpFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 14.9h6.492v12.056H4.96z"
      />
      <path
        fill={color || "#000000"}
        d="m16.354 5.61-4.902 9.638v11.709h15.699l1.54-12.781a2 2 0 0 0-1.986-2.24h-6.499V8.61a3 3 0 0 0-3-3h-.852Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m16.354 5.61-4.902 9.638v11.709h15.699l1.54-12.781a2 2 0 0 0-1.986-2.24h-6.499V8.61a3 3 0 0 0-3-3h-.852Z"
      />
    </svg>
  );
});

ThumbsUpFill.displayName = "ThumbsUpFill";

export default ThumbsUpFill;
