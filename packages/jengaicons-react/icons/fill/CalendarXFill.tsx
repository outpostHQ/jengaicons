import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CalendarXFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.96 3.783a1 1 0 0 1 1 1v2h10v-2a1 1 0 1 1 2 0v2h3a1 1 0 0 1 1 1v3.822l-22 .364V7.783a1 1 0 0 1 1-1h3v-2a1 1 0 0 1 1-1Zm-5 10.186 22-.364v14.178a1 1 0 0 1-1 1h-20a1 1 0 0 1-1-1V13.969Zm14.707 3.107a1 1 0 0 1 0 1.414l-2.293 2.293 2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 1 1 1.414-1.414l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 0Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

CalendarXFill.displayName = "CalendarXFill";

export default CalendarXFill;
