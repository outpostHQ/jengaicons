import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const WindRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4 16.55h21.343A2.664 2.664 0 0 0 28 13.886v0a2.647 2.647 0 0 0-2.64-2.648v0a2.64 2.64 0 0 0-2.64 2.64v.035M4 11.237h10.729a2.664 2.664 0 0 0 2.657-2.666v0a2.647 2.647 0 0 0-2.64-2.648v0a2.64 2.64 0 0 0-2.64 2.64v.035M4 21.763h10.729a2.664 2.664 0 0 1 2.657 2.665v0a2.647 2.647 0 0 1-2.64 2.649v0a2.64 2.64 0 0 1-2.64-2.64V24.4"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {children || childrenCtx}
    </svg>
  );
});

WindRegular.displayName = "WindRegular";

export default WindRegular;
