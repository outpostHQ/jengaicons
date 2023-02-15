import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DragDropFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || colorCtx || "#000000"}
        stroke-dasharray="4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M26.236 15.126V5.129H5.929v20.307h9.854"
      />
      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="m17.872 21.26-.587.32a1.752 1.752 0 0 0-.64 2.394l.218.379c1.631 2.825 4.813 4.301 8.123 2.39 3.095-1.786 3.782-5.13 2.151-7.955l-1.18-2.045a1.467 1.467 0 0 0-.124-.181 1.229 1.229 0 0 0-1.902 1.512l.367.637a.5.5 0 0 1-.866.5l-.929-1.61a.96.96 0 1 0-1.663.96l.93 1.61a.5.5 0 0 1-.866.5l-.262-.452-.005-.01-2.46-4.26a.96.96 0 1 0-1.663.96l3.31 5.734a.5.5 0 0 1-.865.5l-1.087-1.883Z"
        clipRule="evenodd"
      />
      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M20.916 9.448h-9.668a1 1 0 0 0-1 1v9.668a1 1 0 0 0 1.001 1l6.556-.009-2.202-3.808a2.127 2.127 0 1 1 3.682-2.13l.858 1.484a1.853 1.853 0 0 1 1.773-.662v-5.543a1 1 0 0 0-1-1Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

DragDropFill.displayName = "DragDropFill";

export default DragDropFill;
