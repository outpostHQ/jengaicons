import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Wine = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
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
        d="M15.901 21.5V28M11.258 28h9.286M7.716 12.71c1.23-.654 4.092-1.615 8.185.432 4.36 2.18 7.322.949 8.404.31"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M21.016 4h-10.29a.5.5 0 0 0-.476.346l-2.985 9.238a7.903 7.903 0 0 0 7.902 7.916h1.667a7.903 7.903 0 0 0 7.9-7.916l-3.246-9.25A.5.5 0 0 0 21.016 4Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

Wine.displayName = "Wine";

export default Wine;
