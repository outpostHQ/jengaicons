import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HourglassSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.21 4.783H9.71a1 1 0 0 0-1 1v1.54a10 10 0 0 0 4.373 8.268l1.752 1.192-1.752 1.192a10 10 0 0 0-4.374 8.267v1.541a1 1 0 0 0 1 1h14.502a1 1 0 0 0 1-1v-1.54a10 10 0 0 0-4.374-8.268l-1.752-1.192 1.752-1.192a10 10 0 0 0 4.373-8.267V5.783a1 1 0 0 0-1-1Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HourglassSimpleFill.displayName = "HourglassSimpleFill";

export default HourglassSimpleFill;
