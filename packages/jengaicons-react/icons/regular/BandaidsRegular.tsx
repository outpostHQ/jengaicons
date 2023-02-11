import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BandaidsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          opacity=".5"
          d="M16 16.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17.455a1.455 1.455 0 1 0 0-2.91 1.455 1.455 0 0 0 0 2.91Z"
          fill="#1C1B1F"
        />
        <rect
          x="4"
          y="9.486"
          width="7.758"
          height="26.183"
          rx="3.879"
          transform="rotate(-45 4 9.486)"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
        <rect
          width="7.758"
          height="26.183"
          rx="3.879"
          transform="scale(-1 1) rotate(-45 -2.55 38.542)"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

BandaidsRegular.displayName = "BandaidsRegular";

export default BandaidsRegular;
