import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BicycleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24 22.786a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8 22.786a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM7.985 9.214h3.106l5.25 9.667"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m24.04 18.838-5.643-9.58h5.643v1.53M7.961 18.842l4.841-6.426H20"
        />
      </svg>
    );
  }
);

BicycleRegular.displayName = "BicycleRegular";

export default BicycleRegular;
