import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GhostFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M27.757 27.43a.5.5 0 0 0 .853-.354V15.933c0-6.434-5.216-11.65-11.65-11.65S5.31 9.499 5.31 15.933v11.143a.5.5 0 0 0 .854.353l2.676-2.676a.5.5 0 0 1 .707 0l3.176 3.176a.5.5 0 0 0 .707 0l3.177-3.176a.5.5 0 0 1 .707 0l3.176 3.176a.5.5 0 0 0 .707 0l3.176-3.176a.5.5 0 0 1 .707 0l2.677 2.676Zm-14.32-11.147a1.51 1.51 0 1 0 0-3.02 1.51 1.51 0 0 0 0 3.02Zm8.556-1.51a1.51 1.51 0 1 1-3.02 0 1.51 1.51 0 0 1 3.02 0Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

GhostFill.displayName = "GhostFill";

export default GhostFill;
