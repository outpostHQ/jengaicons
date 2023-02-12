import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyEursvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.307 23.887A8.182 8.182 0 0 1 11.34 18.1v-3.636a8.181 8.181 0 0 1 13.967-5.786M8.613 14.465h10.909M8.613 18.101h9.09"
        />
      </svg>
    );
  }
);

CurrencyEursvgFill.displayName = "CurrencyEursvgFill";

export default CurrencyEursvgFill;
