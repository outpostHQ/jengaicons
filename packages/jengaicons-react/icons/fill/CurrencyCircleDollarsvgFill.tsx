import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyCircleDollarsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 16.283c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12Zm-11-7a1 1 0 0 0-2 0v1h-.5a3.5 3.5 0 1 0 0 7h3a1.5 1.5 0 1 1 0 3h-4.5a1 1 0 1 0 0 2h2v1a1 1 0 0 0 2 0v-1h.5a3.5 3.5 0 0 0 0-7h-3a1.5 1.5 0 0 1 0-3h4.5a1 1 0 0 0 0-2h-2v-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CurrencyCircleDollarsvgFill.displayName = "CurrencyCircleDollarsvgFill";

export default CurrencyCircleDollarsvgFill;
