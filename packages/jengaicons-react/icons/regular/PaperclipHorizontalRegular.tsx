import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PaperclipHorizontalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M9.886 17.758h12.867c.966 0 1.75-.783 1.75-1.75v0c0-.965-.784-1.748-1.75-1.748H7.49A3.489 3.489 0 0 0 4 17.75v0a3.489 3.489 0 0 0 3.489 3.489h15.273A5.238 5.238 0 0 0 28 16v0a5.238 5.238 0 0 0-5.238-5.238H10.66"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

PaperclipHorizontalRegular.displayName = "PaperclipHorizontalRegular";

export default PaperclipHorizontalRegular;
