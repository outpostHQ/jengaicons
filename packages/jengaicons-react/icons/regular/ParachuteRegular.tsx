import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ParachuteRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M27.527 14.52a11.52 11.52 0 1 0-23.04 0h23.04ZM16.007 23.16V27M14.087 27h3.84M4.473 14.58l11.506 8.489 11.38-8.489"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.279 15.033C10.79 8.783 14.238 4.407 16.022 3c4.073 2.91 4.888 9.234 4.786 12.033l-4.786 8.127-4.743-8.127Z"
        />
      </svg>
    );
  }
);

ParachuteRegular.displayName = "ParachuteRegular";

export default ParachuteRegular;
