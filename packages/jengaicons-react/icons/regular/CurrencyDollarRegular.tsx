import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyDollarRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 6v20M21.385 12.154a3.846 3.846 0 0 0-3.847-3.846h-3.461a3.846 3.846 0 1 0 0 7.692h4.23a3.846 3.846 0 1 1 0 7.692h-4.615a3.846 3.846 0 0 1-3.846-3.846"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

CurrencyDollarRegular.displayName = "CurrencyDollarRegular";

export default CurrencyDollarRegular;
