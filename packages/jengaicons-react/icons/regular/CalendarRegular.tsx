import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CalendarRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          d="M22 4.5v4M10 4.5v4M5 12.5h22"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 6.5h22v22H5v-22Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 23.34a1.77 1.77 0 0 0 3.148-1.111c0-.914-.932-1.666-1.852-1.76-.08-.008-.128-.1-.082-.166l1.826-2.647a.1.1 0 0 0-.082-.156H11.5M20 24V18.41a.5.5 0 0 0-.769-.422l-.893.57"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CalendarRegular.displayName = "CalendarRegular";

export default CalendarRegular;
