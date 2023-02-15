import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CactusFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        d="M20.652 26.86h6.462a1 1 0 1 1 0 2H6.806a1 1 0 0 1 0-2h6.462v-8.692h-1.385a6.923 6.923 0 0 1-6.923-6.923 2.32 2.32 0 0 1 2.308-2.308 2.32 2.32 0 0 1 2.307 2.308 2.32 2.32 0 0 0 2.308 2.307h1.385V9.398a3.692 3.692 0 0 1 7.384 0v8.77h1.385a2.319 2.319 0 0 0 2.308-2.308 2.319 2.319 0 0 1 2.307-2.308 2.319 2.319 0 0 1 2.308 2.308 6.923 6.923 0 0 1-6.923 6.923h-1.385v4.077Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

CactusFill.displayName = "CactusFill";

export default CactusFill;
