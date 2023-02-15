import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CalendarXFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M10.96 3.783a1 1 0 0 1 1 1v2h10v-2a1 1 0 1 1 2 0v2h3a1 1 0 0 1 1 1v3.822l-22 .364V7.783a1 1 0 0 1 1-1h3v-2a1 1 0 0 1 1-1Zm-5 10.186 22-.364v14.178a1 1 0 0 1-1 1h-20a1 1 0 0 1-1-1V13.969Zm14.707 3.107a1 1 0 0 1 0 1.414l-2.293 2.293 2.293 2.293a1 1 0 0 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 1 1 1.414-1.414l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 0Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CalendarXFill.displayName = "CalendarXFill";

export default CalendarXFill;
