import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HorsexFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M18.249 26.994c5.916 0 10.711-4.796 10.711-10.711 0-5.916-4.796-10.711-10.711-10.711-.575 0-1.14.045-1.69.133V9.04L4.96 16.283l3.277 3.277c3.344-.848 5.38-.799 9.235 0l-3.39 6.593c1.28.542 2.689.84 4.167.84Z"
        fill={color || colorCtx || "#000000"}
      />
      <path
        d="M11.248 24.39c.84.726 1.795 1.324 2.834 1.763m0 0c1.28.542 2.689.841 4.167.841 5.916 0 10.711-4.796 10.711-10.711 0-5.916-4.796-10.711-10.711-10.711-.575 0-1.14.045-1.69.133V9.04L4.96 16.283l3.277 3.277c3.344-.848 5.38-.799 9.235 0l-3.39 6.593Z"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.01 14.498a1.339 1.339 0 1 0 0-2.678 1.339 1.339 0 0 0 0 2.678Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

HorsexFill.displayName = "HorsexFill";

export default HorsexFill;
