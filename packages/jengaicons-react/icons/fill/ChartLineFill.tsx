import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ChartLineFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M6.883 6.953a1 1 0 1 0-2 0v18.66a1 1 0 0 0 1 1h22.154a1 1 0 1 0 0-2H6.883v-4.227l6.315-5.56 6.955 5.872a1 1 0 0 0 1.433-.149l7.231-9.261a1 1 0 0 0-1.576-1.23l-6.592 8.441-6.82-5.757a1 1 0 0 0-1.305.013l-5.64 4.966V6.953Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

ChartLineFill.displayName = "ChartLineFill";

export default ChartLineFill;
