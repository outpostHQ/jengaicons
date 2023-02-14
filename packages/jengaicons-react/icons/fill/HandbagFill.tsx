import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HandbagFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.865 5.283c-1.119 0-1.983.444-2.774 1.235A4.218 4.218 0 0 0 12.855 9.5h-2c0-1.649.655-3.23 1.821-4.396s2.54-1.821 4.189-1.821A6.217 6.217 0 0 1 23.082 9.5h-2a4.217 4.217 0 0 0-4.217-4.217Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M10.84 9.5H6.38a1 1 0 0 0-.994.895L3.6 27.177a1 1 0 0 0 .994 1.106h24.732a1 1 0 0 0 .995-1.106l-1.787-16.782a1 1 0 0 0-.995-.895h-4.456v4.174a1 1 0 0 1-2 0V9.5H12.84v4.174a1 1 0 1 1-2 0V9.5Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

HandbagFill.displayName = "HandbagFill";

export default HandbagFill;
