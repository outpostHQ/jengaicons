import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BedFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 6.711a1 1 0 0 1 1 1v2.429h18a6 6 0 0 1 6 6v3.929c0 .094-.009.186-.025.275.016.072.025.147.025.225v4.285a1 1 0 0 1-2 0V21.57h-22v3.285a1 1 0 1 1-2 0V20.57c0-.078.009-.153.025-.225a1.509 1.509 0 0 1-.025-.275V7.71a1 1 0 0 1 1-1Zm8.429 5.429v7.429H5.96V12.14h7.429Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

BedFill.displayName = "BedFill";

export default BedFill;
