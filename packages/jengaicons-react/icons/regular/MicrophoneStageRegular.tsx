import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrophoneStageRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.82 16.5 16 6.68M13.54 18.96l-1.301 1.301M21.063 18.374a6.937 6.937 0 1 0 0-13.874 6.937 6.937 0 0 0 0 13.874Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.754 18.309 7.657 26.594 5.27 24.209l8.921-11.462"
        />
      </svg>
    );
  }
);

MicrophoneStageRegular.displayName = "MicrophoneStageRegular";

export default MicrophoneStageRegular;
