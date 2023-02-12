import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RulerFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M22.267 4.99a1 1 0 0 0-1.414 0L18.11 7.733l3.753 3.753A1 1 0 0 1 20.45 12.9l-3.753-3.753-2.75 2.75 3.753 3.753a1 1 0 1 1-1.415 1.415l-3.752-3.753-2.751 2.75 3.753 3.753a1 1 0 0 1-1.414 1.415l-3.753-3.753-2.7 2.7a1 1 0 0 0 0 1.414l5.985 5.985a1 1 0 0 0 1.414 0l15.187-15.187a1 1 0 0 0 0-1.414L22.267 4.99Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

RulerFill.displayName = "RulerFill";

export default RulerFill;
