import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EyeglassessvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.46 25.771a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM24.46 25.771a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
          fill="#1C1B1F"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.96 20.771h6"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.078 6.794H9.96a5 5 0 0 0-5 5v9.676M23.843 6.794h.117a5 5 0 0 1 5 5v9.676"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

EyeglassessvgFill.displayName = "EyeglassessvgFill";

export default EyeglassessvgFill;
