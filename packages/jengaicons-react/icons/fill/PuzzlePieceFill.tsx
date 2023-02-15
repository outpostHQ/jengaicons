import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PuzzlePieceFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.156 9.083a3.36 3.36 0 1 0-6.073 0H11.52a2 2 0 0 0-2 2v4.38a3.36 3.36 0 1 0 0 6.442v4.378a2 2 0 0 0 2 2h15.2a2 2 0 0 0 2-2v-4.38a3.362 3.362 0 0 1-4.32-3.22 3.36 3.36 0 0 1 4.32-3.22v-4.38a2 2 0 0 0-2-2h-4.564Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PuzzlePieceFill.displayName = "PuzzlePieceFill";

export default PuzzlePieceFill;
