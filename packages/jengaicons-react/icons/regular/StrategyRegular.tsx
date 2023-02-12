import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StrategyRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.499 5.564v6M12.498 8.564h-6M18.759 21.436l5 5M23.759 21.436l-5 5M6.499 26.436a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM19.516 9.807l4.243-4.243L28 9.807"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23.783 6.41v9.039H6.543v5.875"
        />
      </svg>
    );
  }
);

StrategyRegular.displayName = "StrategyRegular";

export default StrategyRegular;
