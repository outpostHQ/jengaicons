import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CalendarFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M10.96 3.783a1 1 0 0 1 1 1v2h10v-2a1 1 0 1 1 2 0v2h3a1 1 0 0 1 1 1v4h-22v-4a1 1 0 0 1 1-1h3v-2a1 1 0 0 1 1-1Zm-5 10h22v14a1 1 0 0 1-1 1h-20a1 1 0 0 1-1-1v-14Zm5.5 4a1 1 0 0 1 1-1h2.958a1.1 1.1 0 0 1 .905 1.724l-1.161 1.683c.192.113.372.245.535.392.5.451.911 1.12.911 1.93a2.77 2.77 0 0 1-4.926 1.74 1 1 0 1 1 1.556-1.257.77.77 0 0 0 1.37-.483c0-.104-.054-.268-.25-.445a1.29 1.29 0 0 0-.703-.32c-.754-.076-1.328-.97-.804-1.73l.852-1.234H12.46a1 1 0 0 1-1-1Zm10.5.91a1.5 1.5 0 0 0-2.306-1.264l-.893.569a1 1 0 0 0 1.074 1.687l.125-.08v4.678a1 1 0 1 0 2 0v-5.59Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

CalendarFill.displayName = "CalendarFill";

export default CalendarFill;
