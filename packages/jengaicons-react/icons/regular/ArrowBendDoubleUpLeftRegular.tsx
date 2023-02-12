import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ArrowBendDoubleUpLeftRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28 24.121a12 12 0 0 0-12-12h-6"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.243 7.879 10 12.12l4.243 4.243M8.243 7.879 4 12.12l4.243 4.243"
        />
      </svg>
    );
  }
);

ArrowBendDoubleUpLeftRegular.displayName = "ArrowBendDoubleUpLeftRegular";

export default ArrowBendDoubleUpLeftRegular;
