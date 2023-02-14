import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SwapFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M20.01 5.59a1 1 0 0 0 0 1.415l2.536 2.535H8.96a1 1 0 0 0 0 2h13.586l-2.536 2.536a1 1 0 0 0 1.414 1.414l4.243-4.242a.997.997 0 0 0-.01-1.424L21.425 5.59a1 1 0 0 0-1.414 0Zm-6.1 11.9a1 1 0 1 0-1.415-1.414l-4.233 4.233a1.008 1.008 0 0 0-.302.716.997.997 0 0 0 .293.708l4.242 4.242a1 1 0 1 0 1.415-1.414l-2.536-2.535H24.96a1 1 0 0 0 0-2H11.374l2.536-2.536Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

SwapFill.displayName = "SwapFill";

export default SwapFill;
