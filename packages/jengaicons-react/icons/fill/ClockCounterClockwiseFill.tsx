import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ClockCounterClockwiseFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M15.06 4.555a12.468 12.468 0 1 1-6.384 21.044 1 1 0 1 1 1.414-1.414 10.468 10.468 0 1 0 0-14.804l-2.716 2.716h4.107a1 1 0 0 1 0 2h-6.52a1 1 0 0 1-1-1.021v-6.5a1 1 0 0 1 2 0v4.107l2.715-2.716a12.468 12.468 0 0 1 6.384-3.412Zm3.432 5.973a1 1 0 0 0-2 0v6.236a.999.999 0 0 0 .515.893l5.402 3.12a1 1 0 0 0 1-1.733l-4.917-2.838v-5.678Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ClockCounterClockwiseFill.displayName = "ClockCounterClockwiseFill";

export default ClockCounterClockwiseFill;
