import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const AlignLeftFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 4.283v24"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="9.135"
          y="25.693"
          width="7.318"
          height="19.826"
          rx="1"
          transform="rotate(-90 9.135 25.693)"
          fill="#1C1B1F"
        />
        <rect
          x="9.135"
          y="14.193"
          width="7.318"
          height="14.608"
          rx="1"
          transform="rotate(-90 9.135 14.193)"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

AlignLeftFill.displayName = "AlignLeftFill";

export default AlignLeftFill;
