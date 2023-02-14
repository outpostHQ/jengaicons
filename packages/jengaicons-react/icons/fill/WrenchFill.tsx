import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const WrenchFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m10.614 27.313 8.66-8.661c2.571.867 5.479.26 7.527-1.788a7.37 7.37 0 0 0 1.816-7.438c-.106-.337-.528-.42-.778-.17l-3.095 3.084a2.716 2.716 0 0 1-3.84-3.84l3.083-3.096c.25-.25.167-.672-.17-.778a7.37 7.37 0 0 0-7.439 1.816 7.37 7.37 0 0 0-1.816 7.436L5.93 22.629a3.312 3.312 0 0 0 4.684 4.684Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

WrenchFill.displayName = "WrenchFill";

export default WrenchFill;
