import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SmileyNervousRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 28.5c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M11.5 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          fill="#1C1B1F"
        />
        <path
          d="m10.01 22.125 1.884-2.456a.1.1 0 0 1 .16.001l1.768 2.35a.1.1 0 0 0 .158.003l1.857-2.36a.1.1 0 0 1 .157 0l1.9 2.362a.1.1 0 0 0 .159-.003l1.773-2.358a.1.1 0 0 1 .156-.005l2.113 2.466"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

SmileyNervousRegular.displayName = "SmileyNervousRegular";

export default SmileyNervousRegular;
