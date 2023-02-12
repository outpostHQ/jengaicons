import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PaperclipHorizontalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.846 18.04h12.867c.966 0 1.75-.782 1.75-1.748v0c0-.966-.784-1.749-1.75-1.749H8.45a3.489 3.489 0 0 0-3.489 3.489v0a3.489 3.489 0 0 0 3.489 3.488h15.273a5.238 5.238 0 0 0 5.238-5.237v0a5.238 5.238 0 0 0-5.238-5.238H11.62"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PaperclipHorizontalFill.displayName = "PaperclipHorizontalFill";

export default PaperclipHorizontalFill;
