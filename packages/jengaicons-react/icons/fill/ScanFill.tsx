import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ScanFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 3.283a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2h-6Zm18 0a1 1 0 1 0 0 2h5v5a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1h-6Zm-17 19a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-5v-5Zm24 0a1 1 0 0 0-2 0v5h-5a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1v-6ZM11.415 9.738a1 1 0 0 0-1 1v11.09a1 1 0 0 0 1 1h11.09a1 1 0 0 0 1-1v-11.09a1 1 0 0 0-1-1h-11.09Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

ScanFill.displayName = "ScanFill";

export default ScanFill;
