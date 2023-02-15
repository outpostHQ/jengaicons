import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SkipBackFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M8.46 5.783a1 1 0 1 0-2 0v22a1 1 0 0 0 2 0V17.414l17.232 10.883a.5.5 0 0 0 .767-.423V5.691a.5.5 0 0 0-.767-.422L8.461 16.15V5.783Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

SkipBackFill.displayName = "SkipBackFill";

export default SkipBackFill;
