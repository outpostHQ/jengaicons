import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const StickerFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M5.96 4.283h22a1 1 0 0 1 1 1v11.89a1 1 0 0 1-.296.71l-10.2 10.11a1 1 0 0 1-.705.29H5.96a1 1 0 0 1-1-1v-22a1 1 0 0 1 1-1Zm12.09 21.79v-3.7a5 5 0 0 1 5-5h3.658a.5.5 0 0 1 .354.853l-8.157 8.199a.5.5 0 0 1-.854-.353Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

StickerFill.displayName = "StickerFill";

export default StickerFill;
