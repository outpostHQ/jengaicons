import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SpeakerNoneRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15 12.332v8.656M23.069 27.146V5.854L15.163 12.2h-1.76a4.472 4.472 0 1 0 0 8.944h1.76l7.906 6.001Z"
        />
      </svg>
    );
  }
);

SpeakerNoneRegular.displayName = "SpeakerNoneRegular";

export default SpeakerNoneRegular;
