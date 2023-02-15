import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const EraserFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M20.303 3.765a1.019 1.019 0 0 1 1.425 0l7.944 7.822a.981.981 0 0 1 0 1.404L18.16 24.328h8.653a1 1 0 1 1 0 2H15.619c-.05 0-.098-.003-.145-.01h-5.387c-.268 0-.524-.105-.713-.291l-5.127-5.049a.982.982 0 0 1 0-1.403l16.056-15.81Zm.713 2.105-7.329 7.216 6.47 6.469 7.378-7.266-6.52-6.42Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

EraserFill.displayName = "EraserFill";

export default EraserFill;
