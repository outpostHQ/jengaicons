import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BusRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.783 14.435h22.434"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M10.26 20.696a1.565 1.565 0 1 0 0-3.13 1.565 1.565 0 0 0 0 3.13ZM21.74 20.696a1.565 1.565 0 1 0 0-3.13 1.565 1.565 0 0 0 0 3.13Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        d="M4.783 9a5 5 0 0 1 5-5h12.434a5 5 0 0 1 5 5v14.826H4.783V9Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.783 23.826V28H10v-4.174M22 23.826V28h5.217v-4.174"
      />

      {children || childrenCtx}
    </svg>
  );
});

BusRegular.displayName = "BusRegular";

export default BusRegular;
