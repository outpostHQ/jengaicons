import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DesktopFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 4.283a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h11v2h-3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-3v-2h11a1 1 0 0 0 1-1v-18a1 1 0 0 0-1-1h-24Zm12 18h11v-4h-22v4h11Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

DesktopFill.displayName = "DesktopFill";

export default DesktopFill;
