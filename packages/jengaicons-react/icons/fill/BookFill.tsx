import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BookFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size = 32 } = props;

  return (
    <svg
      style={{ width: size, height: size }}
      ref={ref}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M9.969 4.283h16.982v19.965H9.969a3 3 0 0 0-3 2.996V7.283a3 3 0 0 1 3-3Z"
        fill="#1C1B1F"
      />
      <path
        d="M6.969 27.819V7.283a3 3 0 0 1 3-3h16.982v19.965H9.969a3 3 0 0 0-3 3v1.035h17.99"
        stroke="#1C1B1F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BookFill.displayName = "BookFill";

export default BookFill;
