import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WrenchRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.315 18.369 9.654 27.03a3.312 3.312 0 0 1-4.684-4.684l8.661-8.66"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M13.602 13.595a7.373 7.373 0 0 1 9.944-8.996m-5.278 13.754a7.373 7.373 0 0 0 9.132-9.9"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m27.394 8.447-3.61 3.61a2.715 2.715 0 1 1-3.84-3.84l3.61-3.61"
        />
      </svg>
    );
  }
);

WrenchRegular.displayName = "WrenchRegular";

export default WrenchRegular;
