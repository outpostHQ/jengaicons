import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SortdownFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m16.814 4.637 8.957 8.957a.5.5 0 0 1-.353.854H7.502a.5.5 0 0 1-.353-.854l8.958-8.957a.5.5 0 0 1 .707 0Z"
        fill={color || colorCtx || "#000000"}
      />
      <path
        d="m16.107 27.93-8.958-8.958a.5.5 0 0 1 .354-.854h17.915a.5.5 0 0 1 .353.854l-8.957 8.957a.5.5 0 0 1-.707 0Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

SortdownFill.displayName = "SortdownFill";

export default SortdownFill;
