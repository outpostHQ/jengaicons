import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Cpu = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
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
        d="M25.23 13.23H28M25.23 18.77H28M4 13.23h2.77M4 18.77h2.77M18.77 25.23V28M13.23 25.23V28M18.77 4v2.77M13.23 4v2.77"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M6.769 6.769h18.462v18.462H6.769z"
      />
      <rect
        width="6.462"
        height="6.462"
        x="12.769"
        y="12.769"
        stroke={color || colorCtx || "#000000"}
        strokeWidth={weight || weightCtx || "2"}
        rx=".5"
      />

      {children || childrenCtx}
    </svg>
  );
});

Cpu.displayName = "Cpu";

export default Cpu;
