import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FlameFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M17.459 5.105c1.97 1.324 9.1 6.631 9.1 14.078a9.6 9.6 0 0 1-9.58 9.6 4.8 4.8 0 0 0 4.781-4.8c0-3.845-3.08-6.458-4.305-7.345a.834.834 0 0 0-.99 0c-1.225.887-4.305 3.5-4.305 7.345a4.8 4.8 0 0 0 4.781 4.8 9.6 9.6 0 0 1-9.581-9.6c0-7.447 7.131-12.754 9.101-14.078a.882.882 0 0 1 .998 0Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

FlameFill.displayName = "FlameFill";

export default FlameFill;
