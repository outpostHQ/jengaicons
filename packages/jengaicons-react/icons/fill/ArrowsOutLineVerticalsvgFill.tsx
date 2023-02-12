import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsOutLineVerticalsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26.96 16.283h-20M16.96 4.798v8M12.717 9.04l4.243-4.242 4.243 4.242M12.717 23.526l4.243 4.242 4.243-4.242M16.96 19.768v8"
        />
      </svg>
    );
  }
);

ArrowsOutLineVerticalsvgFill.displayName = "ArrowsOutLineVerticalsvgFill";

export default ArrowsOutLineVerticalsvgFill;
