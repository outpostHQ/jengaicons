import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SortAscendingRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.006 13.175v11.299M6 15.059h8.473M6 7.526h16.006M6 22.59h6.59M26 20.48l-3.994 3.994-3.995-3.995"
        />
      </svg>
    );
  }
);

SortAscendingRegular.displayName = "SortAscendingRegular";

export default SortAscendingRegular;
