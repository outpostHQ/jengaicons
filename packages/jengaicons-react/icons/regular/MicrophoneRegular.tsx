import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrophoneRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 24.808V28.5M24.257 17.423a8.308 8.308 0 0 1-16.514 0"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="11.385"
          y="4.5"
          width="9.231"
          height="16.615"
          rx="4.615"
          stroke="#1C1B1F"
          strokeWidth="2"
        />
      </svg>
    );
  }
);

MicrophoneRegular.displayName = "MicrophoneRegular";

export default MicrophoneRegular;
