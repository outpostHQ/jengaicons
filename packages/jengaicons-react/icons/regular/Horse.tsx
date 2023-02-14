import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Horse = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
  const { size, color, alt, children, mirrored, weight } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
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
        strokeWidth={weight || weightCtx || "2"}
        d="M21.545 14.076a5.355 5.355 0 0 1-5.356 5.355"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M16.05 14.215a1.339 1.339 0 1 0 0-2.678 1.339 1.339 0 0 0 0 2.678Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M10.288 24.107c.84.726 1.795 1.324 2.834 1.763m0 0c1.28.541 2.689.841 4.167.841C23.204 26.711 28 21.916 28 16c0-5.915-4.796-10.71-10.711-10.71-.575 0-1.14.044-1.69.132v3.336L4 16l3.277 3.277c3.344-.848 5.38-.799 9.235 0l-3.39 6.593Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

Horse.displayName = "Horse";

export default Horse;
