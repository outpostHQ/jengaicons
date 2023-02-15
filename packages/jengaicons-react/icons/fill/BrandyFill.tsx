import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BrandyFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16.96 22.022v6.261M11.743 28.283h10.434M26.582 4.283a11.478 11.478 0 1 1-19.243 0h19.243Z"
      />
      <path
        fill={color || colorCtx || "#000000"}
        fillRule="evenodd"
        d="M5.955 13.835c1.263 4.81 5.711 8.363 11.005 8.363 5.294 0 9.742-3.553 11.005-8.363H5.955Z"
        clipRule="evenodd"
      />
      <path
        fill={color || colorCtx || "#000000"}
        d="M5.955 13.835v-1a1 1 0 0 0-.967 1.254l.967-.254Zm22.01 0 .968.254a1 1 0 0 0-.968-1.254v1ZM16.96 21.198c-4.84 0-8.89-3.247-10.038-7.617l-1.934.508c1.378 5.25 6.224 9.109 11.972 9.109v-2Zm10.038-7.617c-1.148 4.37-5.198 7.617-10.038 7.617v2c5.748 0 10.594-3.86 11.973-9.109l-1.935-.508Zm.967-.746H5.955v2h22.01v-2Z"
      />

      {children || childrenCtx}
    </svg>
  );
});

BrandyFill.displayName = "BrandyFill";

export default BrandyFill;
