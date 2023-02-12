import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BirdRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M20.714 12.21a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572Z"
        fill={color || colorCtx || "#000000"}
      />
      <path
        d="m16 18.21-4.286 5.142M25.429 13.924v2.571a10.286 10.286 0 0 1-10.286 10.286H4l10.286-12.857V11.78a5.572 5.572 0 0 1 10.96-1.404L28 12.21l-2.571 1.714Z"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {children || childrenCtx}
    </svg>
  );
});

BirdRegular.displayName = "BirdRegular";

export default BirdRegular;
