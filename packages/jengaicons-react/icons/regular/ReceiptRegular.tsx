import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ReceiptRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.5 13h13M9.5 17h13M4 26V7a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v19l-4-2-4 2-4-2-4 2-4-2-4 2Z"
        />
      </svg>
    );
  }
);

ReceiptRegular.displayName = "ReceiptRegular";

export default ReceiptRegular;
