import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HandFistRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          strokeWidth="2"
          d="M16 13V8a3 3 0 1 0-6 0v5a3 3 0 1 0 6 0Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M19 17h6a3 3 0 1 0 0-6h-6a3 3 0 1 0 0 6ZM10 13v-2a3 3 0 0 0-6 0v2a3 3 0 1 0 6 0ZM22 10.97V8a3 3 0 1 0-6 0v2.97c0 .017.013.03.03.03h5.94a.03.03 0 0 0 .03-.03ZM16 21.81A4.81 4.81 0 0 1 20.81 17"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M28 13.972C28 21.843 23.342 28 16 28 8.145 28 4 21.076 4 13.205"
        />
      </svg>
    );
  }
);

HandFistRegular.displayName = "HandFistRegular";

export default HandFistRegular;
