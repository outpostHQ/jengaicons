import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ArrowFatDownFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.167 16.283a.5.5 0 0 0-.353.854l10.793 10.792a.5.5 0 0 0 .707 0l10.793-10.792a.5.5 0 0 0-.354-.854H23.46a.5.5 0 0 1-.5-.5v-10.5a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v10.5a.5.5 0 0 1-.5.5H6.167Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ArrowFatDownFill.displayName = "ArrowFatDownFill";

export default ArrowFatDownFill;