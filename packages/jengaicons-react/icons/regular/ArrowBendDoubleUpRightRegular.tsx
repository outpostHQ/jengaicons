import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowBendDoubleUpRightRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 24.121a12 12 0 0 1 12-12h6"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.757 7.879 22 12.12l-4.243 4.243M23.757 7.879 28 12.12l-4.243 4.243"
        />
      </svg>
    );
  }
);

ArrowBendDoubleUpRightRegular.displayName = "ArrowBendDoubleUpRightRegular";

export default ArrowBendDoubleUpRightRegular;
