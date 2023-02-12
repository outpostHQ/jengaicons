import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const VoicemailFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || "#000000"}
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.76 21.083a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6ZM24.16 21.083a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.76 21.083h14.4"
        />
      </svg>
    );
  }
);

VoicemailFill.displayName = "VoicemailFill";

export default VoicemailFill;
