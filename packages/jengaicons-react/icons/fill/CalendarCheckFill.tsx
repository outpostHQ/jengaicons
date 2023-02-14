import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CalendarCheckFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M10.96 3.782a1 1 0 0 1 1 1v2h10v-2a1 1 0 1 1 2 0v2h3a1 1 0 0 1 1 1v4h-22v-4a1 1 0 0 1 1-1h3v-2a1 1 0 0 1 1-1Zm17 10h-22v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-14Zm-5.773 3.314a1 1 0 0 1-.042 1.414l-5.833 5.5a1 1 0 0 1-1.374-.002l-3.167-3a1 1 0 0 1 1.376-1.452l2.48 2.35 5.146-4.851a1 1 0 0 1 1.414.041Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CalendarCheckFill.displayName = "CalendarCheckFill";

export default CalendarCheckFill;
