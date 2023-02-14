import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ShowerFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M9.512 26.628a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483ZM12.408 23.731a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483ZM6.202 23.317a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483ZM9.098 20.42a1.241 1.241 0 1 0 0-2.482 1.241 1.241 0 0 0 0 2.483Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9.03 11.467 13.31-2.219-2.219 13.31a.828.828 0 0 1-1.401.45L8.58 12.868a.828.828 0 0 1 .45-1.401Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M28.96 5.938h-2.967a.828.828 0 0 0-.585.242L22.34 9.248"
      />

      {children || childrenCtx}
    </svg>
  );
});

ShowerFill.displayName = "ShowerFill";

export default ShowerFill;
