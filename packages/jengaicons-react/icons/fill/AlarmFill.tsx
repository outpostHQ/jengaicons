import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AlarmFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M24.253 4.89a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.415l-4-4a1 1 0 0 1 0-1.415Zm3.078 12.707c0 5.728-4.643 10.371-10.371 10.371-5.728 0-10.371-4.643-10.371-10.37 0-5.728 4.643-10.371 10.37-10.371 5.729 0 10.372 4.643 10.372 10.37Zm-9.371-6.6a1 1 0 0 0-2 0v6.6a1 1 0 0 0 1 1h6.6a1 1 0 1 0 0-2h-5.6v-5.6ZM9.667 6.306A1 1 0 1 0 8.253 4.89l-4 4a1 1 0 1 0 1.414 1.415l4-4Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

AlarmFill.displayName = "AlarmFill";

export default AlarmFill;
