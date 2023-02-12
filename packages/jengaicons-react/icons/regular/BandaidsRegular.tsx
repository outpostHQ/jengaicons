import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BandaidsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 16.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
          opacity=".5"
        />
        <path
          fill={color || "#000000"}
          d="M16 17.455a1.455 1.455 0 1 0 0-2.91 1.455 1.455 0 0 0 0 2.91Z"
        />
        <rect
          width="7.758"
          height="26.183"
          x="4"
          y="9.486"
          stroke={color || "#000000"}
          strokeWidth="2"
          rx="3.879"
          transform="rotate(-45 4 9.486)"
        />
        <rect
          width="7.758"
          height="26.183"
          stroke={color || "#000000"}
          strokeWidth="2"
          rx="3.879"
          transform="scale(-1 1) rotate(-45 -2.55 38.542)"
        />
      </svg>
    );
  }
);

BandaidsRegular.displayName = "BandaidsRegular";

export default BandaidsRegular;
