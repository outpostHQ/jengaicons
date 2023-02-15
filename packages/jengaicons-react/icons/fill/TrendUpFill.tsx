import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TrendUpFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M29.198 10.297a1 1 0 0 1 .762.972v6.135a1 1 0 0 1-2 0V14.16l-6.054 7.754a1 1 0 0 1-1.433.149l-7.59-6.408-7.262 6.394a1 1 0 0 1-1.322-1.501l7.91-6.963a1 1 0 0 1 1.306-.014l7.454 6.293 5.93-7.596h-4.074a1 1 0 1 1 0-2h6.059c.105-.007.21.002.314.028Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

TrendUpFill.displayName = "TrendUpFill";

export default TrendUpFill;
