import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const VibrateFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M12.817 6.854a1 1 0 0 0-1 1v16.857a1 1 0 0 0 1 1h8.285a1 1 0 0 0 1-1V7.854a1 1 0 0 0-1-1h-8.285Zm-3.428 5.144a1 1 0 1 0-2 0v8.57a1 1 0 1 0 2 0v-8.57Zm16.142-1a1 1 0 0 1 1 1v8.57a1 1 0 1 1-2 0v-8.57a1 1 0 0 1 1-1Zm3.429 1.713a1 1 0 0 1 1 1v5.143a1 1 0 0 1-2 0v-5.143a1 1 0 0 1 1-1Zm-24 0a1 1 0 0 1 1 1v5.143a1 1 0 1 1-2 0v-5.143a1 1 0 0 1 1-1Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

VibrateFill.displayName = "VibrateFill";

export default VibrateFill;
