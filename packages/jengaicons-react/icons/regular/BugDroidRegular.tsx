import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BugDroidRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28 16.592H4"
        />
        <path
          fill={color || "#000000"}
          d="M19.5 13.592a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12.5 13.592a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m6.663 5.477 3.803 3M25.48 5.477l-3.802 3"
        />
        <rect
          width="16.053"
          height="19.862"
          x="7.973"
          y="6.661"
          stroke={color || "#000000"}
          strokeWidth="2"
          rx="8.027"
        />
      </svg>
    );
  }
);

BugDroidRegular.displayName = "BugDroidRegular";

export default BugDroidRegular;
