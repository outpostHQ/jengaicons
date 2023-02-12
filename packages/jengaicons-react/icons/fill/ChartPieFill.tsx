import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChartPieFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.96 5.328v9.223l7.988-4.612a10.991 10.991 0 0 0-7.988-4.611Zm-.48 11.809a.947.947 0 0 1-.042.025l-9.466 5.465a10.987 10.987 0 0 0 8.988 4.656c6.075 0 11-4.925 11-11 0-1.647-.362-3.21-1.011-4.613l-9.469 5.467Zm-.52-13.854c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

ChartPieFill.displayName = "ChartPieFill";

export default ChartPieFill;
