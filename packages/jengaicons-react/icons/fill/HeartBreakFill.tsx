import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HeartBreakFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.203 8.226A6.24 6.24 0 0 0 4.96 11.97c0 8.16 12 14.88 12 14.88s12-6.72 12-14.88a6.24 6.24 0 0 0-7.6-6.098l-5.484 5.52 3.135 3.134a1 1 0 0 1 0 1.415l-1.92 1.92a1 1 0 0 1-1.414-1.414l1.213-1.213-3.133-3.133a1 1 0 0 1-.002-1.412l2.448-2.464Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HeartBreakFill.displayName = "HeartBreakFill";

export default HeartBreakFill;
