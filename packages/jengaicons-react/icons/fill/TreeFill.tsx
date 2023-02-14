import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TreeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.96 19.569v3.01a6.692 6.692 0 1 0 5.62-11.643 6.692 6.692 0 0 0-13.342.02 6.692 6.692 0 1 0 5.722 11.623v6.204a1 1 0 1 0 2 0v-6.217h-2v-2.397l-4.986-2.493a1 1 0 0 1 .894-1.789l4.092 2.046v-1.13a.97.97 0 0 1 0-.041v-4.596a1 1 0 1 1 2 0v2.998l4.092-2.046a1 1 0 0 1 .894 1.789L17.96 17.4V19.569Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

TreeFill.displayName = "TreeFill";

export default TreeFill;
