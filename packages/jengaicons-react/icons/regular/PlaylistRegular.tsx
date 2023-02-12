import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlaylistRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4 7.38h21.12M4 15.06h13.4M4 22.74h7.64M18.914 25.62a3.016 3.016 0 1 0 0-6.032 3.016 3.016 0 0 0 0 6.032Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m28 13.612-6.07-1.887V22.72"
        />
      </svg>
    );
  }
);

PlaylistRegular.displayName = "PlaylistRegular";

export default PlaylistRegular;
