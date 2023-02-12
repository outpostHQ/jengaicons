import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BathtubRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10 23.286v2.571M22 23.286v2.571"
        />
        <path
          stroke={color || "#000000"}
          strokeWidth="2"
          d="M4 14.357a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v3.929a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3.929Z"
        />
        <rect
          width="6.857"
          height="4.286"
          x="16.857"
          y="13.857"
          stroke={color || "#000000"}
          strokeWidth="2"
          rx=".5"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M8.286 13.857V8.143a2 2 0 0 1 2-2h.285a2 2 0 0 1 2 2v.143"
        />
      </svg>
    );
  }
);

BathtubRegular.displayName = "BathtubRegular";

export default BathtubRegular;
