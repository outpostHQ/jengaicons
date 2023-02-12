import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StarHalfFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.01 4.917V22.17"
      />
      <path
        fill={color || "#000000"}
        d="m9.525 27.648 7.385-5.366V4.917L12.09 13.6H4.96l7.386 5.366-2.821 8.682Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9.525 27.648 7.385-5.366V4.917L12.09 13.6H4.96l7.386 5.366-2.821 8.682Z"
      />
      <path
        stroke={color || "#000000"}
        stroke-dasharray="6 6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m17.01 4.917 4.82 8.683h7.13l-7.386 5.366 2.821 8.682-7.385-5.366"
      />
    </svg>
  );
});

StarHalfFill.displayName = "StarHalfFill";

export default StarHalfFill;
