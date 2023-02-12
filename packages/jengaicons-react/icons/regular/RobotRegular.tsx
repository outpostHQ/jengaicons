import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RobotRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        d="M18.5 23.269h-5M16 10.143V6.4"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 17.769a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21.5 17.769a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM16 8.272a2.083 2.083 0 1 0 0-4.167 2.083 2.083 0 0 0 0 4.167Z"
        fill={color || colorCtx || "#000000"}
      />
      <rect
        x="4"
        y="10.143"
        width="24"
        height="17.752"
        rx="5"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
      />

      {children || childrenCtx}
    </svg>
  );
});

RobotRegular.displayName = "RobotRegular";

export default RobotRegular;
