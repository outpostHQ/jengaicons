import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GradientFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.46 8.033a1 1 0 1 0 0 2h24a1 1 0 0 0 0-2h-24Zm0 5a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2h-10Zm14 0a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2h-10Zm-15 6a1 1 0 0 1 1-1h5.5a1 1 0 0 1 0 2h-5.5a1 1 0 0 1-1-1Zm19.5-1a1 1 0 1 0 0 2h5.5a1 1 0 0 0 0-2h-5.5Zm-10.5 1a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1Zm-8 4a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2h-3Zm6 1a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1Zm8-1a1 1 0 1 0 0 2h3a1 1 0 0 0 0-2h-3Zm6 1a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2h-3a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

GradientFill.displayName = "GradientFill";

export default GradientFill;
