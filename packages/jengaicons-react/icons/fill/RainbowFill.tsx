import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RainbowFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 8.926a13 13 0 0 0-13 13v1.714a1 1 0 1 0 2 0v-1.714a11 11 0 1 1 22 0v1.714a1 1 0 1 0 2 0v-1.714a13 13 0 0 0-13-13Zm-6.768 6.232a9.571 9.571 0 0 1 16.34 6.768v1.714a1 1 0 0 1-2 0v-1.714a7.571 7.571 0 1 0-15.143 0v1.714a1 1 0 0 1-2 0v-1.714a9.571 9.571 0 0 1 2.803-6.768Zm2.424 2.424a6.143 6.143 0 0 1 10.487 4.344v1.714a1 1 0 1 1-2 0v-1.714a4.143 4.143 0 0 0-8.286 0v1.714a1 1 0 1 1-2 0v-1.714c0-1.63.647-3.192 1.8-4.344Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

RainbowFill.displayName = "RainbowFill";

export default RainbowFill;
