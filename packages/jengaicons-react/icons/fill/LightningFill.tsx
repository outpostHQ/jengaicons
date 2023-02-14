import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LightningFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m18.811 12.292 1.223-6.337c.095-.49-.508-.8-.852-.44L8.697 16.51a.5.5 0 0 0 .187.814l6.045 2.243a.5.5 0 0 1 .315.574l-1.381 6.41c-.106.493.502.815.85.45l10.52-11.026a.5.5 0 0 0-.18-.811l-5.932-2.31a.5.5 0 0 1-.31-.561Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LightningFill.displayName = "LightningFill";

export default LightningFill;
