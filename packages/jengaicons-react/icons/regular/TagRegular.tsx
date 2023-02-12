import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TagRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M10.515 11.31a1.36 1.36 0 1 0 0-2.719 1.36 1.36 0 0 0 0 2.719Z"
        fill={color || colorCtx || "#000000"}
      />
      <path
        d="m4.146 15.525 12.33 12.33c.195.195.51.195.705 0l10.673-10.672a.498.498 0 0 0 0-.705L15.52 4.144a.498.498 0 0 0-.432-.139L6.05 5.481a.498.498 0 0 0-.41.404l-1.633 9.2a.498.498 0 0 0 .138.44Z"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {children || childrenCtx}
    </svg>
  );
});

TagRegular.displayName = "TagRegular";

export default TagRegular;
