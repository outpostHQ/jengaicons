import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CalendarCheckFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.96 3.782a1 1 0 0 1 1 1v2h10v-2a1 1 0 1 1 2 0v2h3a1 1 0 0 1 1 1v4h-22v-4a1 1 0 0 1 1-1h3v-2a1 1 0 0 1 1-1Zm17 10h-22v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-14Zm-5.773 3.314a1 1 0 0 1-.042 1.414l-5.833 5.5a1 1 0 0 1-1.374-.002l-3.167-3a1 1 0 0 1 1.376-1.452l2.48 2.35 5.146-4.851a1 1 0 0 1 1.414.041Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

CalendarCheckFill.displayName = "CalendarCheckFill";

export default CalendarCheckFill;
