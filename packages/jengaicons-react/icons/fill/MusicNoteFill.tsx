import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MusicNoteFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.718 28.783a5.21 5.21 0 1 0 0-10.419 5.21 5.21 0 0 0 0 10.419Z"
        />
        <path
          fill={color || "#000000"}
          d="M27.411 8.042 16.928 4.783v6.294l10.483 2.978V8.042Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16.928 11.077 10.483 2.978V8.042L16.928 4.783v18.993"
        />
      </svg>
    );
  }
);

MusicNoteFill.displayName = "MusicNoteFill";

export default MusicNoteFill;
