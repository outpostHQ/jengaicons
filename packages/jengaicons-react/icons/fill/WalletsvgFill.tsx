import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WalletsvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 9.96v16.783h-24V7.759 9.96h24Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M24.026 5.823H6.96a2 2 0 0 0-2 2V9.96h21.996"
        />
        <path
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M28.96 26.743V9.96h-24V7.76v18.984h24Zm-3-4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

WalletsvgFill.displayName = "WalletsvgFill";

export default WalletsvgFill;
