import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GearFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M14.112 25.181a.518.518 0 0 1 .365.49v2.112a.5.5 0 0 0 .5.5h3.966a.5.5 0 0 0 .5-.5V25.67c0-.225.15-.421.365-.49a9.285 9.285 0 0 0 1.43-.593.518.518 0 0 1 .604.088l1.494 1.494a.5.5 0 0 0 .707 0l2.804-2.804a.5.5 0 0 0 0-.707l-1.494-1.494a.518.518 0 0 1-.088-.604c.236-.456.435-.934.593-1.43a.519.519 0 0 1 .49-.365h2.112a.5.5 0 0 0 .5-.5V14.3a.5.5 0 0 0-.5-.5h-2.112a.519.519 0 0 1-.49-.365 9.276 9.276 0 0 0-.593-1.43.518.518 0 0 1 .088-.604l1.494-1.494a.5.5 0 0 0 0-.707l-2.804-2.804a.5.5 0 0 0-.707 0L21.842 7.89a.518.518 0 0 1-.604.087 9.281 9.281 0 0 0-1.43-.592.518.518 0 0 1-.365-.49V4.783a.5.5 0 0 0-.5-.5h-3.966a.5.5 0 0 0-.5.5v2.112c0 .225-.15.421-.365.49a9.285 9.285 0 0 0-1.43.592.518.518 0 0 1-.604-.087l-1.494-1.494a.5.5 0 0 0-.707 0L7.073 9.2a.5.5 0 0 0 0 .707L8.567 11.4c.159.159.19.404.088.604a9.283 9.283 0 0 0-.593 1.43.518.518 0 0 1-.49.365H5.46a.5.5 0 0 0-.5.5v3.966a.5.5 0 0 0 .5.5h2.112c.225 0 .421.15.49.365.158.496.357.974.593 1.43.103.2.07.445-.088.604l-1.494 1.494a.5.5 0 0 0 0 .707l2.804 2.804a.5.5 0 0 0 .707 0l1.494-1.494a.518.518 0 0 1 .604-.088c.456.236.934.434 1.43.593Zm8.848-8.898a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

GearFill.displayName = "GearFill";

export default GearFill;
