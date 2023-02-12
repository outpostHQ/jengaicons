import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsOutCardinalsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M16.998 4.283v8M12.717 8.526l4.243-4.243 4.243 4.242M12.717 24.041l4.244 4.242 4.242-4.243M16.998 20.283v8M4.96 16.321h8M9.203 12.079 4.96 16.32l4.243 4.243M24.718 12.04l4.242 4.242-4.241 4.244M28.96 16.319h-8"
        />
      </svg>
    );
  }
);

ArrowsOutCardinalsvgFill.displayName = "ArrowsOutCardinalsvgFill";

export default ArrowsOutCardinalsvgFill;
