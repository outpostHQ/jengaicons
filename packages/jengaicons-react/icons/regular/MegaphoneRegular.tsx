import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MegaphoneRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M19.23 20.28v4.75h4v-5"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 5.125c0-.405.451-.649.794-.431 5.461 3.468 8.746 4.305 14.44 5.195V19.9c-6.289 1.026-9.59 2.05-14.387 5.966A.518.518 0 0 1 4 25.471V5.125Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m19.233 9.892 4.196-.003c2.512 0 4.571 2.469 4.571 4.98 0 2.512-1.239 4.431-4.458 5.036h-4.309V9.892Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

MegaphoneRegular.displayName = "MegaphoneRegular";

export default MegaphoneRegular;
