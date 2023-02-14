import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BandaidsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M26.924 13.219a4.88 4.88 0 0 0-6.9-6.9l-3.771 3.771-3.064-3.064a3.879 3.879 0 0 0-5.486 5.486l3.064 3.064-3.771 3.771a4.88 4.88 0 0 0 6.9 6.9l3.771-3.771 3.065 3.064a3.88 3.88 0 0 0 5.485-5.486l-3.064-3.064 3.771-3.771Zm-5.185 2.357 3.771-3.772a2.879 2.879 0 1 0-4.072-4.071l-3.77 3.771 4.07 4.072Zm-5.486 5.485-4.071-4.071-3.772 3.772a2.879 2.879 0 0 0 4.072 4.071l3.771-3.771Zm.707-8.317-3.54 3.539 3.54 3.539 3.54-3.54-3.54-3.538Zm1.455 3.539a1.455 1.455 0 1 1-2.91 0 1.455 1.455 0 0 1 2.91 0Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

BandaidsFill.displayName = "BandaidsFill";

export default BandaidsFill;
