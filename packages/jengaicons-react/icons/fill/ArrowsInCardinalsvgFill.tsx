import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsInCardinalsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.75 20.283v8M12.507 24.526l4.243-4.243 4.242 4.242M12.507 8.04l4.243 4.243 4.242-4.243M16.75 4.283v8M20.75 15.835h8M24.992 11.593l-4.242 4.242 4.242 4.243M8.507 11.59l4.242 4.243-4.481 3.99M12.75 15.833h-8"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

ArrowsInCardinalsvgFill.displayName = "ArrowsInCardinalsvgFill";

export default ArrowsInCardinalsvgFill;
