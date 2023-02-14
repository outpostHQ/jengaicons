import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SpiralFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.48 16.763a.96.96 0 0 1 .96.96 1.92 1.92 0 0 1-1.92 1.92 2.867 2.867 0 0 1-2.88-2.88 3.84 3.84 0 0 1 3.84-3.84 4.8 4.8 0 0 1 4.8 4.8 5.76 5.76 0 0 1-5.76 5.76 6.72 6.72 0 0 1-6.72-6.72 7.692 7.692 0 0 1 7.68-7.68 8.64 8.64 0 0 1 8.64 8.64 9.6 9.6 0 0 1-9.6 9.6 10.56 10.56 0 0 1-10.56-10.56 11.52 11.52 0 0 1 11.52-11.52 12.48 12.48 0 0 1 12.48 12.48"
      />

      {children || childrenCtx}
    </svg>
  );
});

SpiralFill.displayName = "SpiralFill";

export default SpiralFill;
