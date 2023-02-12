import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignRightFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 4.283v24"
        />
        <rect
          width="7.318"
          height="19.826"
          fill={color || "#000000"}
          rx="1"
          transform="matrix(0 -1 -1 0 24.785 25.693)"
        />
        <rect
          width="7.318"
          height="14.608"
          fill={color || "#000000"}
          rx="1"
          transform="matrix(0 -1 -1 0 24.785 14.193)"
        />
      </svg>
    );
  }
);

AlignRightFill.displayName = "AlignRightFill";

export default AlignRightFill;
