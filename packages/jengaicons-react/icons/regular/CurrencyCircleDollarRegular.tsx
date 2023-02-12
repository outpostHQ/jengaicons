import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyCircleDollarRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12ZM16 9v2M16 21v2"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 21h4.5a2.5 2.5 0 0 0 0-5h-3a2.5 2.5 0 0 1 0-5H19"
        />
      </svg>
    );
  }
);

CurrencyCircleDollarRegular.displayName = "CurrencyCircleDollarRegular";

export default CurrencyCircleDollarRegular;
