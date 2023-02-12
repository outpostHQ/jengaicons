import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const StarFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.484 3.592a.5.5 0 0 1 .951 0l2.59 7.972a.5.5 0 0 0 .476.345h8.381a.5.5 0 0 1 .294.905l-6.78 4.926a.5.5 0 0 0-.182.559l2.59 7.971a.5.5 0 0 1-.77.56l-6.78-4.927a.5.5 0 0 0-.588 0l-6.78 4.926a.5.5 0 0 1-.77-.559l2.59-7.971a.5.5 0 0 0-.182-.559l-6.78-4.926a.5.5 0 0 1 .293-.905h8.382a.5.5 0 0 0 .475-.345l2.59-7.972Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

StarFill.displayName = "StarFill";

export default StarFill;
