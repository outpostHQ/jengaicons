import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyDollarsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 6.283v20M22.345 12.437a3.846 3.846 0 0 0-3.846-3.846h-3.462a3.846 3.846 0 1 0 0 7.692h4.23a3.846 3.846 0 1 1 0 7.692h-4.614a3.846 3.846 0 0 1-3.847-3.846"
        />
      </svg>
    );
  }
);

CurrencyDollarsvgFill.displayName = "CurrencyDollarsvgFill";

export default CurrencyDollarsvgFill;
