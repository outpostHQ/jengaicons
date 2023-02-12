import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FishRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M20.66 10.489a1.35 1.35 0 1 0 0-2.702 1.35 1.35 0 0 0 0 2.702Z"
        fill={color || colorCtx || "#000000"}
      />
      <path
        d="M24.072 19.483h-.26a5.404 5.404 0 0 1-5.403-5.403 5.403 5.403 0 0 1-5.403-5.393 1.999 1.999 0 0 1 .011-.259"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.101 17.828 4 20.395l6.304 1.801 1.801 6.304 2.567-6.101C30.252 22.027 28.18 8.564 27.55 5.637a.924.924 0 0 0-.687-.687c-2.927-.63-16.39-2.702-16.762 12.878Z"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {children || childrenCtx}
    </svg>
  );
});

FishRegular.displayName = "FishRegular";

export default FishRegular;
