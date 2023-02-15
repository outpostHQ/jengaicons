import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TrashFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M11.96 3.783a1 1 0 0 0-1 1v3h-5a1 1 0 0 0 0 2h2v18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-18h2a1 1 0 0 0 0-2h-5v-3a1 1 0 0 0-1-1h-10Zm9 4v-2h-8v2h8Zm-7 6a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Zm7 1a1 1 0 1 0-2 0v8a1 1 0 0 0 2 0v-8Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

TrashFill.displayName = "TrashFill";

export default TrashFill;
