import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BagSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.783 9.217a5.217 5.217 0 1 1 10.435 0"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.522 9.217h22.956V28H4.522z"
        />
      </svg>
    );
  }
);

BagSimpleRegular.displayName = "BagSimpleRegular";

export default BagSimpleRegular;
