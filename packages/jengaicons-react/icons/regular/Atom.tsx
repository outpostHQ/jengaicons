import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Atom = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
  const { size, color, alt, children, mirrored, weight, style } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
    style: styleCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
      ref={ref}
      style={{
        ...styleCtx,
        ...style,
      }}
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
        d="M24.7 25.2c1.823-1.823-.595-7.195-5.4-12-4.805-4.805-10.177-7.223-12-5.4-1.823 1.822.595 7.195 5.4 12 4.805 4.805 10.177 7.222 12 5.4Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M19.3 19.8c4.805-4.805 7.223-10.178 5.4-12-1.823-1.823-7.195.595-12 5.4-4.805 4.805-7.223 10.177-5.4 12 1.823 1.822 7.195-.595 12-5.4Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M15.998 17.773a1.273 1.273 0 1 0 0-2.546 1.273 1.273 0 0 0 0 2.546Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

Atom.displayName = "Atom";

export default Atom;
