import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FlameRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M25.6 18.9c0-8.64-9.6-14.4-9.6-14.4s-9.6 5.76-9.6 14.4a9.6 9.6 0 1 0 19.2 0Z"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2 23.7a4.8 4.8 0 1 0 9.6 0c0-4.8-4.8-7.68-4.8-7.68s-4.8 2.88-4.8 7.68Z"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {children || childrenCtx}
    </svg>
  );
});

FlameRegular.displayName = "FlameRegular";

export default FlameRegular;
