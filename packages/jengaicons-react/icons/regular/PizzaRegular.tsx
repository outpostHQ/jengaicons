import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PizzaRegular = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.141 14.147a.91.91 0 0 1 .242-1.228 19.97 19.97 0 0 1 23.234 0 .91.91 0 0 1 .242 1.228L16.765 31.58a.907.907 0 0 1-1.53 0L4.14 14.147Z"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.65 16.519a16.334 16.334 0 0 1 20.7 0M20.12 26.31a3.177 3.177 0 1 1 3.268-5.137M8.05 20.29a3.176 3.176 0 1 1 2.754 4.32"
      />

      {children || childrenCtx}
    </svg>
  );
});

PizzaRegular.displayName = "PizzaRegular";

export default PizzaRegular;
