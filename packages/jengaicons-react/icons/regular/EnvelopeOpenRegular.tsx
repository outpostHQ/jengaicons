import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EnvelopeOpenRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m13.818 20.003-9.51 6.717M27.692 26.72l-9.51-6.717M28 13.002l-9.818 7h-4.364l-9.818-7"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28 27.003v-14L15.972 4.996 4 13.002v14h24Z"
        />
      </svg>
    );
  }
);

EnvelopeOpenRegular.displayName = "EnvelopeOpenRegular";

export default EnvelopeOpenRegular;
