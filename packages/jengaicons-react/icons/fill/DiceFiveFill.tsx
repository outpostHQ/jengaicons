import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DiceFiveFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M28.96 5.283a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22Zm-15 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-7.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

DiceFiveFill.displayName = "DiceFiveFill";

export default DiceFiveFill;
