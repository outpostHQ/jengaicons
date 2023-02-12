import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DivideRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6 16h20"
        />
        <path
          fill={color || "#000000"}
          d="M16 10.546a1.818 1.818 0 1 0 0-3.637 1.818 1.818 0 0 0 0 3.637ZM16 25.091a1.818 1.818 0 1 0 0-3.636 1.818 1.818 0 0 0 0 3.636Z"
        />
      </svg>
    );
  }
);

DivideRegular.displayName = "DivideRegular";

export default DivideRegular;
