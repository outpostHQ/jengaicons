import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BookmarkFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M8.64 3.28a1 1 0 0 0-1 1l-.028 24.002a1 1 0 0 0 1.528.85L17 24.244l7.776 4.886a1 1 0 0 0 1.532-.846l.028-24.002a1 1 0 0 0-1-1.001H8.64Zm.98 18.115-.006 5.087 6.86-4.267a1 1 0 0 1 1.06.003l6.776 4.257.006-5.076-7.313-4.596-7.383 4.592Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

BookmarkFill.displayName = "BookmarkFill";

export default BookmarkFill;
