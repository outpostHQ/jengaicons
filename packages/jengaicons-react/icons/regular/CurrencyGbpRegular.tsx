import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CurrencyGbpRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.38 16.952h9.525M23.619 26H8.381a4.285 4.285 0 0 0 4.286-4.286V11.238a5.238 5.238 0 0 1 8.942-3.704"
        />
      </svg>
    );
  }
);

CurrencyGbpRegular.displayName = "CurrencyGbpRegular";

export default CurrencyGbpRegular;
