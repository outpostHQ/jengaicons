import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BookFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fill={color || "#000000"}
        d="M9.969 4.283h16.982v19.965H9.969a3 3 0 0 0-3 2.996V7.283a3 3 0 0 1 3-3Z"
      />
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.969 27.819V7.283a3 3 0 0 1 3-3h16.982v19.965H9.969a3 3 0 0 0-3 3v1.035h17.99"
      />
    </svg>
  );
});

BookFill.displayName = "BookFill";

export default BookFill;
