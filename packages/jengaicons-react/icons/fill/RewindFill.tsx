import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RewindFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.644 16.358a.5.5 0 0 0 0 .85l10.177 6.321a.5.5 0 0 0 .764-.425V10.462a.5.5 0 0 0-.764-.425L5.644 16.358Zm12.375 0a.5.5 0 0 0 0 .85l10.177 6.321a.5.5 0 0 0 .764-.425V10.462a.5.5 0 0 0-.764-.425L18.02 16.358Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

RewindFill.displayName = "RewindFill";

export default RewindFill;
