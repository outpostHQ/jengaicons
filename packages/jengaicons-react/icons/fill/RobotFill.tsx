import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RobotFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.96 8.3a2.083 2.083 0 1 0-2 0v2.126h-6a5 5 0 0 0-5 5v7.752a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-7.752a5 5 0 0 0-5-5h-6V8.3Zm-5 8.252a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm6.5 8a1 1 0 0 0 0-2h-5a1 1 0 1 0 0 2h5Zm3-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

RobotFill.displayName = "RobotFill";

export default RobotFill;
