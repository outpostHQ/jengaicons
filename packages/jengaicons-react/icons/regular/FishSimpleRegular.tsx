import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FishSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          d="M20.375 10.721a1.404 1.404 0 1 0 0-2.807 1.404 1.404 0 0 0 0 2.807Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 21.95C31.112 27.88 28.305 9.26 27.533 5.692a.958.958 0 0 0-.725-.725C23.24 4.195 4.62 1.387 10.55 28.5"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M25.673 18.207a11.229 11.229 0 0 1-11.38-11.392"
        />
      </svg>
    );
  }
);

FishSimpleRegular.displayName = "FishSimpleRegular";

export default FishSimpleRegular;
