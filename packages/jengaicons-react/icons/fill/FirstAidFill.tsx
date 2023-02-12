import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FirstAidFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M13.016 12.171V5.395a1 1 0 0 1 1-1h6.168a1 1 0 0 1 1 1v6.776h6.776a1 1 0 0 1 1 1v5.888a1 1 0 0 1-1 1h-6.776v7.112a1 1 0 0 1-1 1h-6.168a1 1 0 0 1-1-1v-7.112H5.96a1 1 0 0 1-1-1v-5.888a1 1 0 0 1 1-1h7.056Z"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

FirstAidFill.displayName = "FirstAidFill";

export default FirstAidFill;
