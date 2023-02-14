import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Tag = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
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
        fill={color || colorCtx || "#000000"}
        d="M10.515 11.31a1.36 1.36 0 1 0 0-2.719 1.36 1.36 0 0 0 0 2.719Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="m4.146 15.525 12.33 12.33c.195.195.51.195.705 0l10.673-10.672a.498.498 0 0 0 0-.705L15.52 4.144a.498.498 0 0 0-.432-.139L6.05 5.481a.498.498 0 0 0-.41.404l-1.633 9.2a.498.498 0 0 0 .138.44Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

Tag.displayName = "Tag";

export default Tag;
