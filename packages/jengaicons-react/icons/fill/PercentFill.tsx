import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PercentFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M24.667 8.575a1 1 0 0 1 0 1.415l-14 14a1 1 0 0 1-1.415-1.414l14.001-14a1 1 0 0 1 1.414 0ZM11.904 13.95a2.722 2.722 0 1 0 0-5.445 2.722 2.722 0 0 0 0 5.445Zm12.834 7.389a2.722 2.722 0 1 1-5.445 0 2.722 2.722 0 0 1 5.445 0Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

PercentFill.displayName = "PercentFill";

export default PercentFill;
