import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SortDescendingRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.892 19.205V7.587M17.785 11.694l4.107-4.108L26 11.694M6 16.935h8.414M6 9.456h6.544M6 24.414h15.892"
        />
      </svg>
    );
  }
);

SortDescendingRegular.displayName = "SortDescendingRegular";

export default SortDescendingRegular;
