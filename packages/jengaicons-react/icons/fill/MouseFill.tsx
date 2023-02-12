import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MouseFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M8.773 12.283a8 8 0 0 1 8-8h.373a8 8 0 0 1 8 8v1H8.773v-1Zm0 3h16.373v5a8 8 0 0 1-8 8h-.373a8 8 0 0 1-8-8v-5Zm9.187-7.672a1 1 0 0 0-2 0v3.344a1 1 0 1 0 2 0V7.61Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

MouseFill.displayName = "MouseFill";

export default MouseFill;
