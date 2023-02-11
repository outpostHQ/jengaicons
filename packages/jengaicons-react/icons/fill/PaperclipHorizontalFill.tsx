import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PaperclipHorizontalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.846 18.04h12.867c.966 0 1.75-.782 1.75-1.748v0c0-.966-.784-1.749-1.75-1.749H8.45a3.489 3.489 0 0 0-3.489 3.489v0a3.489 3.489 0 0 0 3.489 3.488h15.273a5.238 5.238 0 0 0 5.238-5.237v0a5.238 5.238 0 0 0-5.238-5.238H11.62"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

PaperclipHorizontalFill.displayName = "PaperclipHorizontalFill";

export default PaperclipHorizontalFill;
