import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RecycleFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m19.96 29.283-3-3.001 3-2.999M25.289 9.682l-1.1 4.099-4.096-1.099M10.83 17.88l-1.1-4.1-4.097 1.1"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.96 26.282h10.997a2 2 0 0 0 1.731-3.002l-2.994-5.172M9.73 13.78l-5.498 9.5a2 2 0 0 0 1.731 3.002h5.997M24.19 13.78 18.69 4.282a2 2 0 0 0-3.462 0l-2.994 5.172"
      />

      {children || childrenCtx}
    </svg>
  );
});

RecycleFill.displayName = "RecycleFill";

export default RecycleFill;
