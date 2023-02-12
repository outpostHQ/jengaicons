import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SyringeRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.592 4.065 28 9.473M16.283 6.77l9.013 9.013M13.353 12.403l2.93 2.929M10.199 15.557l2.929 2.93M20.79 11.276l4.506-4.507M7.092 24.851l-2.704 2.704"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23.813 14.287 17.648 8.12 6.933 18.836l.15 6.016 6.015.15 10.715-10.715Z"
        />
      </svg>
    );
  }
);

SyringeRegular.displayName = "SyringeRegular";

export default SyringeRegular;
