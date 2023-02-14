import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Robot = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
  const { size, color, alt, children, mirrored, weight } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
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
        strokeWidth={weight || weightCtx || "2"}
        d="M18.5 23.269h-5M16 10.143V6.4"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M10.5 17.769a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21.5 17.769a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 8.272a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z"
      />
      <rect
        width="24"
        height="17.752"
        x="4"
        y="10.143"
        stroke={color || colorCtx || "#000000"}
        strokeWidth={weight || weightCtx || "2"}
        rx="5"
      />

      {children || childrenCtx}
    </svg>
  );
});

Robot.displayName = "Robot";

export default Robot;
