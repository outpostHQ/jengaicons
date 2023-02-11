import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ClockClockwiseFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M18.47 6.516a10.468 10.468 0 1 0 5.36 17.669 1 1 0 0 1 1.414 1.414 12.467 12.467 0 1 1 0-17.632l2.716 2.716V6.842a1 1 0 1 1 2 0v6.24a.997.997 0 0 1-1.014 1.015h-6.241a1 1 0 1 1 0-2h3.84L23.83 9.381a10.468 10.468 0 0 0-5.36-2.865Zm-1.042 4.012a1 1 0 0 0-2 0v6.236a1.012 1.012 0 0 0 .143.535.991.991 0 0 0 .376.361l5.398 3.117a1 1 0 0 0 1-1.733l-4.917-2.838v-5.678Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

ClockClockwiseFill.displayName = "ClockClockwiseFill";

export default ClockClockwiseFill;
