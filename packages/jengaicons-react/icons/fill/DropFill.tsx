import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DropFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.516 5.2c1.996 1.555 8.675 7.286 8.675 14.352a9.23 9.23 0 0 1-18.462 0c0-7.066 6.679-12.797 8.674-14.352a.896.896 0 0 1 1.113 0Zm5.887 15.457a1 1 0 0 0-1.97-.34 4.527 4.527 0 0 1-3.706 3.695 1 1 0 0 0 .335 1.972 6.527 6.527 0 0 0 5.341-5.328Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

DropFill.displayName = "DropFill";

export default DropFill;
