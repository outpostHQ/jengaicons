import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MicrophoneRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 24.808V28.5M24.257 17.423a8.308 8.308 0 0 1-16.514 0"
        />
        <rect
          width="9.231"
          height="16.615"
          x="11.385"
          y="4.5"
          stroke={color || "#000000"}
          strokeWidth="2"
          rx="4.615"
        />
      </svg>
    );
  }
);

MicrophoneRegular.displayName = "MicrophoneRegular";

export default MicrophoneRegular;
