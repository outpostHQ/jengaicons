import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const VoicemailRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.8 20.8a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6ZM23.2 20.8a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6ZM8.8 20.8h14.4"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

VoicemailRegular.displayName = "VoicemailRegular";

export default VoicemailRegular;
