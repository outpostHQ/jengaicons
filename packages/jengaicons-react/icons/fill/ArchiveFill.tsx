import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ArchiveFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 6.975a1 1 0 0 0-1 1v5.31a1 1 0 0 0 1 1h1.562v9.306a1 1 0 0 0 1 1h18.592a1 1 0 0 0 1-1v-9.306h1.846a1 1 0 0 0 1-1v-5.31a1 1 0 0 0-1-1h-24Zm1 5.31v-3.31h22v3.31h-22Zm7.23 4.921a1 1 0 0 1 1-1h5.54a1 1 0 1 1 0 2h-5.54a1 1 0 0 1-1-1Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

ArchiveFill.displayName = "ArchiveFill";

export default ArchiveFill;
