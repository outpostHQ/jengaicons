import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PaintBrushBroadFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.383 3.283a6 6 0 0 0-6 6v9.24a1 1 0 0 0 1 1h6.881l-.503 4.95a4.369 4.369 0 1 0 8.694 0l-.503-4.95h6.585a1 1 0 0 0 1-1V4.284a1 1 0 0 0-1-1H11.383Zm11.308 2v4.73a1 1 0 0 0 2 0v-4.73h1.846v8.576H7.383V9.283a4 4 0 0 1 4-4H22.69Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PaintBrushBroadFill.displayName = "PaintBrushBroadFill";

export default PaintBrushBroadFill;
