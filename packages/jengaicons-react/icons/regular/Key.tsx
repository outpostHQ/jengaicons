import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Key = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
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
        fill={color || colorCtx || "#000000"}
        d="M21.891 11.63a1.433 1.433 0 1 0 0-2.866 1.433 1.433 0 0 0 0 2.866Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="m4.053 22.468 7.564-7.509a8.429 8.429 0 1 1 5.063 5.356l-1.03 1.12a.478.478 0 0 1-.338.14h-2.735a.478.478 0 0 0-.478.478V24.2a.478.478 0 0 1-.477.478H9.607a.478.478 0 0 0-.478.478v2.366a.478.478 0 0 1-.478.478h-4.26a.478.478 0 0 1-.478-.478v-4.716c0-.127.05-.249.14-.338Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

Key.displayName = "Key";

export default Key;
