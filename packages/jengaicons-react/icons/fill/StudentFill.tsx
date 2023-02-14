import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const StudentFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6.046 8.283v10"
      />
      <path
        fill={color || colorCtx || "#000000"}
        stroke={color || colorCtx || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="m16.96 12.283 12-4.123-12-3.877-12 3.877 12 4.123Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.812 11.137a6.208 6.208 0 1 0 8.046 0"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.511 28.283c.237-2.021 2.423-6.092 9.277-6.206 6.854-.114 9.084 4.09 9.342 6.206"
      />

      {children || childrenCtx}
    </svg>
  );
});

StudentFill.displayName = "StudentFill";

export default StudentFill;
