import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RepeatFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M25.424 4.833a1 1 0 1 0-1.414 1.414l2.536 2.536H12.96a9 9 0 0 0-9 9 1 1 0 0 0 2 0 7 7 0 0 1 7-7h13.586l-2.536 2.536a1 1 0 0 0 1.414 1.414l4.236-4.236a1.001 1.001 0 0 0 .007-1.421m-4.243-4.243 4.243 4.243-4.243-4.243ZM29.96 16.783a1 1 0 0 0-2 0 7 7 0 0 1-7 7H7.374l2.536-2.536a1 1 0 1 0-1.414-1.414l-4.243 4.243a.998.998 0 0 0 .007 1.421l4.236 4.236a1 1 0 0 0 1.414-1.415l-2.536-2.535H20.96a9 9 0 0 0 9-9Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

RepeatFill.displayName = "RepeatFill";

export default RepeatFill;
