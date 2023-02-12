import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GlobeRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12Z"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M4.683 12h22.634M4.684 20h22.633"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 27.678c2.761 0 5-5.229 5-11.678 0-6.45-2.239-11.678-5-11.678S11 9.55 11 16c0 6.45 2.239 11.678 5 11.678Z"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeMiterlimit="10"
      />

      {children || childrenCtx}
    </svg>
  );
});

GlobeRegular.displayName = "GlobeRegular";

export default GlobeRegular;
