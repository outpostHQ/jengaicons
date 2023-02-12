import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyGbpsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.341 17.235h9.524M24.58 26.283H9.34a4.286 4.286 0 0 0 4.286-4.286V11.521a5.238 5.238 0 0 1 8.942-3.704"
        />
      </svg>
    );
  }
);

CurrencyGbpsvgFill.displayName = "CurrencyGbpsvgFill";

export default CurrencyGbpsvgFill;
