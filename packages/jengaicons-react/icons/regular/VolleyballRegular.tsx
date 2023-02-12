import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const VolleyballRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12ZM10 5.608 16 16M10 26.392 16 16M28 16H16"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.572 4.082A12.006 12.006 0 0 1 21.632 16M6.393 23.195a12.006 12.006 0 0 1 6.791-12.073M27.035 20.723a12.005 12.005 0 0 1-13.85.155"
        />
      </svg>
    );
  }
);

VolleyballRegular.displayName = "VolleyballRegular";

export default VolleyballRegular;
