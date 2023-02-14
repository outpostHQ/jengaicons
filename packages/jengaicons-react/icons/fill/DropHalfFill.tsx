import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DropHalfFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M26.19 19.052c0-8.307-9.23-14.769-9.23-14.769s-9.231 6.462-9.231 14.77a9.23 9.23 0 0 0 18.462 0Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M16.96 4.283s9.23 6.462 9.23 14.77a9.23 9.23 0 0 1-9.23 9.23v-24Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

DropHalfFill.displayName = "DropHalfFill";

export default DropHalfFill;
