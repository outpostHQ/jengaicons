import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const StarFourFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color, alt, children, mirrored, style } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    style: styleCtx,
  } = useContext(JengaIconContext);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      ref={ref}
      style={{
        ...styleCtx,
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        fill={color || colorCtx || "#000000"}
        d="M16.491 6.05a.5.5 0 0 1 .938 0l2.692 7.276a.5.5 0 0 0 .296.296l7.276 2.692a.5.5 0 0 1 0 .938l-7.276 2.692a.5.5 0 0 0-.296.296l-2.692 7.276a.5.5 0 0 1-.938 0l-2.692-7.276a.5.5 0 0 0-.296-.296l-7.276-2.692a.5.5 0 0 1 0-.938l7.276-2.692a.5.5 0 0 0 .296-.296L16.49 6.05Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

StarFourFill.displayName = "StarFourFill";

export default StarFourFill;
