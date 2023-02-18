import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Coins = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
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
        d="M12.571 15.953c4.734 0 8.572-1.76 8.572-3.932 0-2.171-3.838-3.932-8.572-3.932C7.838 8.09 4 9.85 4 12.021c0 2.171 3.838 3.931 8.571 3.931ZM12.571 15.952v3.932"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M4 12.227v2.916c0 1.244.436 2.497 1.491 3.155 3.656 2.28 10.104 2.483 14.076.034 1.103-.68 1.576-1.98 1.576-3.275v-2.83"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M17.846 15.142v3.932M7.297 15.142v3.932M20.949 12.972c4.008.33 7.05 1.937 7.05 3.87 0 2.172-3.837 3.932-8.57 3.932-1.8 0-3.469-.254-4.848-.689M19.428 20.774v3.931"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M28 17.049v2.83c0 1.295-.473 2.594-1.575 3.274-4.014 2.475-10.554 2.242-14.188-.105-.975-.628-1.38-1.792-1.38-2.952v0"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M24.703 19.964v3.931M14.154 20.09v3.805"
      />

      {children || childrenCtx}
    </svg>
  );
});

Coins.displayName = "Coins";

export default Coins;
