import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CubeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M8.351 9.069a.5.5 0 0 0 .001.873l8.587 4.782a.176.176 0 0 0 .085.021.496.496 0 0 0 .247-.056L25.54 9.99a.5.5 0 0 0-.003-.871l-8.395-4.697a.5.5 0 0 0-.488 0L8.351 9.069Zm19.27 2.9a.5.5 0 0 0-.747-.435l-8.597 4.883a.5.5 0 0 0-.253.435V26.8a.5.5 0 0 0 .744.436l8.597-4.81a.5.5 0 0 0 .256-.436V11.968ZM15.28 27.376a.5.5 0 0 0 .744-.436V16.798a.5.5 0 0 0-.257-.437L6.92 11.433a.5.5 0 0 0-.743.437v10.12a.5.5 0 0 0 .256.436l8.848 4.951Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

CubeFill.displayName = "CubeFill";

export default CubeFill;
