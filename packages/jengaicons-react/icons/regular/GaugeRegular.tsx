import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GaugeRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16 7.692v3.693M4.409 17.51l3.566.955M27.591 17.51l-3.566.955M13.167 24.308l7.89-10.284"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 19.692c0-6.627 5.373-12 12-12s12 5.373 12 12v4.616H4v-4.616Z"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {children || childrenCtx}
    </svg>
  );
});

GaugeRegular.displayName = "GaugeRegular";

export default GaugeRegular;
