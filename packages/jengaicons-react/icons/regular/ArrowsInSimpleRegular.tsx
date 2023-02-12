import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowsInSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.425 19.575h6v6M4 28l8.425-8.425M19.425 6.575v6h6M27.85 4.15l-8.425 8.425"
        />
      </svg>
    );
  }
);

ArrowsInSimpleRegular.displayName = "ArrowsInSimpleRegular";

export default ArrowsInSimpleRegular;
