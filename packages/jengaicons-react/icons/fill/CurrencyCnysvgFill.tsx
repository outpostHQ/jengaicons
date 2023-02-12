import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyCnysvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.688 8.556h14.545M7.87 14.92H26.05M19.688 14.92v6.363a2.727 2.727 0 0 0 2.727 2.727h4.545v-2.727M14.233 14.92v1.817A7.273 7.273 0 0 1 6.96 24.01"
        />
      </svg>
    );
  }
);

CurrencyCnysvgFill.displayName = "CurrencyCnysvgFill";

export default CurrencyCnysvgFill;
