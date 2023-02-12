import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyJpysvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.246 20.569h11.428M11.246 16.759h11.428M16.96 16.759v9.524M25.532 6.283 16.96 16.759 8.39 6.283"
        />
      </svg>
    );
  }
);

CurrencyJpysvgFill.displayName = "CurrencyJpysvgFill";

export default CurrencyJpysvgFill;
