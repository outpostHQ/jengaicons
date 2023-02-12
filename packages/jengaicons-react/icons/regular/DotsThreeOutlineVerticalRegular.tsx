import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DotsThreeOutlineVerticalRegular = forwardRef<
  SVGSVGElement,
  JengaIconProps
>((props, ref) => {
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
        d="M16 18.77a2.77 2.77 0 1 0 0-5.54 2.77 2.77 0 0 0 0 5.54ZM16 9.538A2.77 2.77 0 1 0 16 4a2.77 2.77 0 0 0 0 5.538ZM16 28a2.77 2.77 0 1 0 0-5.538A2.77 2.77 0 0 0 16 28Z"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeMiterlimit="10"
      />

      {children || childrenCtx}
    </svg>
  );
});

DotsThreeOutlineVerticalRegular.displayName = "DotsThreeOutlineVerticalRegular";

export default DotsThreeOutlineVerticalRegular;
