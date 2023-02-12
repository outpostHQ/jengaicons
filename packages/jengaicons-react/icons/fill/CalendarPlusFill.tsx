import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CalendarPlusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.96 3.783a1 1 0 0 1 1 1v2h10v-2a1 1 0 1 1 2 0v2h3a1 1 0 0 1 1 1v4h-22v-4a1 1 0 0 1 1-1h3v-2a1 1 0 0 1 1-1Zm-5 10h22v14a1 1 0 0 1-1 1h-20a1 1 0 0 1-1-1v-14Zm6.5 7a1 1 0 0 1 1-1h2.5v-2.5a1 1 0 1 1 2 0v2.5h2.5a1 1 0 0 1 0 2h-2.5v2.5a1 1 0 0 1-2 0v-2.5h-2.5a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

CalendarPlusFill.displayName = "CalendarPlusFill";

export default CalendarPlusFill;
