import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PillRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m12.573 12.568 6.859 6.859M19.44 14.29l2.616-2.527"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        width="24.245"
        height="9.696"
        rx="4.848"
        transform="scale(-1 1) rotate(45 -15.4 -23.523)"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
      />

      {children || childrenCtx}
    </svg>
  );
});

PillRegular.displayName = "PillRegular";

export default PillRegular;
