import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DiamondFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.395 17.334a1.487 1.487 0 0 1 0-2.102L15.91 4.718c.58-.58 1.522-.58 2.102 0l10.514 10.514c.58.58.58 1.522 0 2.102L18.01 27.848c-.58.58-1.522.58-2.102 0L5.395 17.334Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

DiamondFill.displayName = "DiamondFill";

export default DiamondFill;
