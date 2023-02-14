import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Baby = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
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
        d="M16 28.5c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M11.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM20.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M19.317 21.5a6.004 6.004 0 0 1-6.634 0"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M14.944 4.744c-.711 1.43-1.17 2.506-1.53 3.643-.456 1.435.701 2.826 2.207 2.826v0A2.379 2.379 0 0 0 18 8.834v-.268"
      />

      {children || childrenCtx}
    </svg>
  );
});

Baby.displayName = "Baby";

export default Baby;
