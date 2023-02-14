import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SpadeFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.695 4.457a.472.472 0 0 1 .53 0c1.722 1.147 11.273 7.752 11.273 13.21a6 6 0 0 1-9.85 4.602l1.785 5.356a.5.5 0 0 1-.475.658h-5.997a.5.5 0 0 1-.474-.658l1.785-5.356a6 6 0 0 1-9.85-4.601c0-5.46 9.55-12.064 11.273-13.211Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

SpadeFill.displayName = "SpadeFill";

export default SpadeFill;
