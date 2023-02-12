import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GhostRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.477 16a1.51 1.51 0 1 0 0-3.02 1.51 1.51 0 0 0 0 3.02ZM19.523 16a1.51 1.51 0 1 0 0-3.02 1.51 1.51 0 0 0 0 3.02Z"
        fill={color || colorCtx || "#000000"}
      />
      <path
        d="M27.65 28V15.65C27.65 9.216 22.434 4 16 4S4.35 9.216 4.35 15.65V28l3.883-3.883L12.117 28 16 24.117 19.883 28l3.884-3.883L27.65 28Z"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {children || childrenCtx}
    </svg>
  );
});

GhostRegular.displayName = "GhostRegular";

export default GhostRegular;
