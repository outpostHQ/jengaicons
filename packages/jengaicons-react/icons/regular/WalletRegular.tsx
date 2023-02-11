import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WalletRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 7.476V26.46h24V9.677H6.6"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.065 5.54H6a2 2 0 0 0-2 2v2.137h21.996"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.5 23.46a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

WalletRegular.displayName = "WalletRegular";

export default WalletRegular;
