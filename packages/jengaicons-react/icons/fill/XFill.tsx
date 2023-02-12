import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const XFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M24.67 9.988a1 1 0 0 0-1.415-1.414l-6.295 6.295-6.295-6.295a1 1 0 1 0-1.414 1.414l6.295 6.295-6.295 6.295a1 1 0 0 0 1.414 1.414l6.295-6.295 6.295 6.295a1 1 0 0 0 1.414-1.414l-6.295-6.295 6.295-6.295Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

XFill.displayName = "XFill";

export default XFill;
