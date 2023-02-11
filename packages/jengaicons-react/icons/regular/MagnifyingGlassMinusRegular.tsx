import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MagnifyingGlassMinusRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.5 14.5h8M14.5 25C20.299 25 25 20.299 25 14.5 25 8.7 20.299 4 14.5 4S4 8.7 4 14.5C4 20.299 8.701 25 14.5 25ZM21.924 21.925 28 28"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

MagnifyingGlassMinusRegular.displayName = "MagnifyingGlassMinusRegular";

export default MagnifyingGlassMinusRegular;
