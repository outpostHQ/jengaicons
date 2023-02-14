import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LayoutFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M3.895 4.979a.5.5 0 0 0-.5.5v4.227a.5.5 0 0 0 .5.5h26.13a.5.5 0 0 0 .5-.5V5.479a.5.5 0 0 0-.5-.5H3.895Zm11.18 9.281a.5.5 0 0 1 .5-.5h14.45a.5.5 0 0 1 .5.5v12.827a.5.5 0 0 1-.5.5h-14.45a.5.5 0 0 1-.5-.5V14.261Zm-11.68 0a.5.5 0 0 1 .5-.5h6.966a.5.5 0 0 1 .5.5v12.827a.5.5 0 0 1-.5.5H3.895a.5.5 0 0 1-.5-.5V14.261Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

LayoutFill.displayName = "LayoutFill";

export default LayoutFill;
