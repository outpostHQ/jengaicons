import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const StampFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        d="M14.822 17.143 12.473 6.3a3 3 0 0 1 2.932-3.635h3.589a3 3 0 0 1 2.904 3.752l-2.779 10.726h8.595a1 1 0 0 1 1 1v5.48a1 1 0 0 1-1 1H6.206a1 1 0 0 1-1-1v-5.48a1 1 0 0 1 1-1h8.615Zm-9.615 11.39a1 1 0 0 1 1-1h21.506a1 1 0 1 1 0 2H6.207a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

StampFill.displayName = "StampFill";

export default StampFill;
