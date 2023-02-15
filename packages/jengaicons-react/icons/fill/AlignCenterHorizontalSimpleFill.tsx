import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AlignCenterHorizontalSimpleFill = forwardRef<
  SVGSVGElement,
  JengaIconProps
>((props, ref) => {
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
        d="M16.96 4.374a1 1 0 0 1 1 1v5.454h10a1 1 0 0 1 1 1v8.91a1 1 0 0 1-1 1h-10v5.454a1 1 0 0 1-2 0v-5.455h-10a1 1 0 0 1-1-1v-8.909a1 1 0 0 1 1-1h10V5.374a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

AlignCenterHorizontalSimpleFill.displayName = "AlignCenterHorizontalSimpleFill";

export default AlignCenterHorizontalSimpleFill;
