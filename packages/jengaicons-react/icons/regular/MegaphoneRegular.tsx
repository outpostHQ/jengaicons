import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MegaphoneRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.23 20.28v4.75h4v-5"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 5.125c0-.405.451-.649.794-.431 5.461 3.468 8.746 4.305 14.44 5.195V19.9c-6.289 1.026-9.59 2.05-14.387 5.966A.518.518 0 0 1 4 25.471V5.125Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19.233 9.892 4.196-.003c2.512 0 4.571 2.469 4.571 4.98 0 2.512-1.239 4.431-4.458 5.036h-4.309V9.892Z"
        />
      </svg>
    );
  }
);

MegaphoneRegular.displayName = "MegaphoneRegular";

export default MegaphoneRegular;
