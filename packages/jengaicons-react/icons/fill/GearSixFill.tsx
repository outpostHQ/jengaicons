import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GearSixFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M21.243 27.666a.5.5 0 0 1-.683-.183l-1.057-1.83a.518.518 0 0 0-.56-.24 9.374 9.374 0 0 1-3.966 0 .518.518 0 0 0-.56.24l-1.057 1.83a.5.5 0 0 1-.683.183l-3.434-1.982A.5.5 0 0 1 9.06 25l1.057-1.832a.518.518 0 0 0-.071-.606 9.33 9.33 0 0 1-1.984-3.432.518.518 0 0 0-.49-.365H5.46a.5.5 0 0 1-.5-.5V14.3a.5.5 0 0 1 .5-.5h2.112c.225 0 .421-.15.49-.365a9.33 9.33 0 0 1 1.984-3.432.518.518 0 0 0 .071-.606L9.06 7.565a.5.5 0 0 1 .183-.683l3.434-1.983a.5.5 0 0 1 .683.183l1.056 1.83c.113.195.341.289.56.242a9.376 9.376 0 0 1 3.967 0 .518.518 0 0 0 .56-.242l1.057-1.83a.5.5 0 0 1 .683-.183l3.434 1.983a.5.5 0 0 1 .183.683l-1.057 1.831a.518.518 0 0 0 .071.607 9.33 9.33 0 0 1 1.984 3.432.519.519 0 0 0 .49.365h2.112a.5.5 0 0 1 .5.5v3.966a.5.5 0 0 1-.5.5h-2.112a.518.518 0 0 0-.49.365 9.329 9.329 0 0 1-1.984 3.432.518.518 0 0 0-.071.606l1.057 1.832a.5.5 0 0 1-.183.683l-3.434 1.982Zm1.717-11.383a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

GearSixFill.displayName = "GearSixFill";

export default GearSixFill;
