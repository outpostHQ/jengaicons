import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PauseFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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

      <rect
        width="7.091"
        height="24"
        x="6.051"
        y="4.783"
        fill={color || colorCtx || "#000000"}
        rx=".5"
      />
      <rect
        width="7.091"
        height="24"
        x="20.778"
        y="4.783"
        fill={color || colorCtx || "#000000"}
        rx=".5"
      />

      {children || childrenCtx}
    </svg>
  );
});

PauseFill.displayName = "PauseFill";

export default PauseFill;
