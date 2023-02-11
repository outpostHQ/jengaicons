import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EraserRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m12.057 12.132 7.82 7.82"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m28 12.006-7.944-7.823L4 19.993l5.127 5.05h5.634L28 12.005Z"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M14.659 25.045h11.193"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

EraserRegular.displayName = "EraserRegular";

export default EraserRegular;
