import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EnvelopeOpenFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          d="M28.96 13.821v12.464a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1V13.82a1 1 0 0 1 .444-.832l10.974-7.337a1 1 0 0 1 1.11-.001l11.026 7.339a1 1 0 0 1 .446.832ZM6.877 14.4a1 1 0 0 1 1.395-.233l7.323 5.22h2.73l7.323-5.22a1 1 0 0 1 1.162 1.628l-6.437 4.59 6.195 4.375a1 1 0 0 1-1.154 1.633l-7.087-5.005h-2.735l-7.086 5.005a1 1 0 1 1-1.154-1.633l6.195-4.376-6.437-4.589a1 1 0 0 1-.233-1.395Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

EnvelopeOpenFill.displayName = "EnvelopeOpenFill";

export default EnvelopeOpenFill;
