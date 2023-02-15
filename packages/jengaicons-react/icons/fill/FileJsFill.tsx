import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileJsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored, style } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    style: styleCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
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
        strokeWidth="2"
        d="M10.39 21.749v4.605a1.93 1.93 0 0 1-1.929 1.929v0a1.93 1.93 0 0 1-1.93-1.93v-.27M18.743 21.749h-3.065c-.902 0-1.634.731-1.634 1.634v0c0 .902.732 1.633 1.634 1.633h1.505M15.561 25.016h1.548c.902 0 1.634.731 1.634 1.633v0c0 .903-.732 1.634-1.634 1.634h-3.065"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M19.981 4.283H6.96v11.982h14.998v12.018h5.002V11.291l-6.979-7.008Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.981 4.283H6.96v11.982h14.998v12.018h5.002V11.291l-6.979-7.008Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.05 11.224V4.41l6.818 6.813h-6.819Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

FileJsFill.displayName = "FileJsFill";

export default FileJsFill;
