import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HandFistFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored, style } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    style: styleCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      style={{
        ...styleCtx,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M16.472 8.033a2.5 2.5 0 0 0-5 0v5a2.5 2.5 0 0 0 5 0v-5Zm1 6a2.5 2.5 0 0 0 2.5 2.5h6a2.5 2.5 0 0 0 0-5h-6a2.5 2.5 0 0 0-2.5 2.5Zm5-6v2.5h-2.5a3.49 3.49 0 0 0-2.5 1.05v-3.55a2.5 2.5 0 0 1 5 0Zm-12 3v2a2.5 2.5 0 0 1-5 0v-2a2.5 2.5 0 1 1 5 0Zm3.5 5.5a3.498 3.498 0 0 1-3-1.696 3.498 3.498 0 0 1-3 1.696 3.498 3.498 0 0 1-2.999-1.694l-.001.21c0 7.171 5.372 12.984 12 12.984 6.37 0 11.582-5.372 11.976-12.157a3.498 3.498 0 0 1-2.976 1.657h-4.19a4.31 4.31 0 0 0-4.31 4.31.5.5 0 0 1-1 0c0-1.877.974-3.527 2.445-4.472a3.509 3.509 0 0 1-2.23-2.129 3.493 3.493 0 0 1-2.715 1.291Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

HandFistFill.displayName = "HandFistFill";

export default HandFistFill;
