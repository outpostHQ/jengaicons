import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PaperclipHorizontalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M9.886 17.758h12.867c.966 0 1.75-.783 1.75-1.75v0c0-.965-.784-1.748-1.75-1.748H7.49A3.489 3.489 0 0 0 4 17.75v0a3.489 3.489 0 0 0 3.489 3.489h15.273A5.238 5.238 0 0 0 28 16v0a5.238 5.238 0 0 0-5.238-5.238H10.66"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PaperclipHorizontalRegular.displayName = "PaperclipHorizontalRegular";

export default PaperclipHorizontalRegular;
