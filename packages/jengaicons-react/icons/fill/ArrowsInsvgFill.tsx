import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsInsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26.96 20.283h-6v6M28.96 28.283l-8-8M6.96 20.283h6v6M4.96 28.283l8-8M20.96 6.283v6h6M28.96 4.283l-8 8M12.96 6.283v6h-6M4.96 4.283l8 8"
        />
      </svg>
    );
  }
);

ArrowsInsvgFill.displayName = "ArrowsInsvgFill";

export default ArrowsInsvgFill;
