import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CoinsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fill={color || colorCtx || "#000000"}
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.532 15.735c4.733 0 8.571-1.76 8.571-3.931 0-2.172-3.838-3.932-8.571-3.932-4.734 0-8.572 1.76-8.572 3.932 0 2.171 3.838 3.931 8.572 3.931Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.531 15.735v3.932"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M4.96 12.01v2.915c0 1.245.436 2.497 1.492 3.156 3.656 2.28 10.104 2.483 14.076.033 1.103-.68 1.575-1.979 1.575-3.274v-2.83"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.806 14.925v3.931M8.257 14.925v3.931"
      />
      <path
        fill={color || colorCtx || "#000000"}
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.389 20.557c4.734 0 8.571-1.76 8.571-3.932 0-1.933-3.042-3.54-7.051-3.87l.302 2.942c-.026.975-1.638 3.916-6.67 4.171 1.38.434 3.049.689 4.848.689Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.389 20.557v3.931"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="M28.96 16.831v2.83c0 1.296-.472 2.595-1.575 3.275-4.013 2.474-10.553 2.242-14.188-.105-.974-.629-1.38-1.792-1.38-2.952v0"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25.663 19.746v3.932M15.114 19.872v3.806"
      />

      {children || childrenCtx}
    </svg>
  );
});

CoinsFill.displayName = "CoinsFill";

export default CoinsFill;
