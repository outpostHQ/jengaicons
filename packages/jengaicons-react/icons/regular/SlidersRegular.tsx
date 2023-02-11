import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SlidersRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 13.891v14.087M16 5.022v3.652M16 13.891a2.609 2.609 0 1 0 0-5.217 2.609 2.609 0 0 0 0 5.217ZM25.391 24.326v3.652M25.392 5.022v14.087M25.391 24.326a2.609 2.609 0 1 0 0-5.217 2.609 2.609 0 0 0 0 5.217ZM6.609 20.152v7.826M6.609 5.022v9.913M6.609 20.152a2.609 2.609 0 1 0 0-5.217 2.609 2.609 0 0 0 0 5.217Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

SlidersRegular.displayName = "SlidersRegular";

export default SlidersRegular;
