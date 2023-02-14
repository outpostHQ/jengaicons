import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const WifiHighFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.96 8.69a16.101 16.101 0 0 0-11.298 4.63 1 1 0 1 1-1.404-1.426 18.101 18.101 0 0 1 25.404 0 1 1 0 1 1-1.404 1.425A16.101 16.101 0 0 0 16.96 8.69Zm-7.347 8.589a10.514 10.514 0 0 1 14.694 0 1 1 0 0 0 1.398-1.43 12.513 12.513 0 0 0-17.49 0 1 1 0 1 0 1.398 1.43Zm3.949 3.965a4.92 4.92 0 0 1 6.796 0 1 1 0 1 0 1.382-1.446 6.92 6.92 0 0 0-9.56 0 1 1 0 1 0 1.382 1.446Zm4.798 3.233a1.4 1.4 0 1 1-2.798 0 1.4 1.4 0 0 1 2.798 0Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

WifiHighFill.displayName = "WifiHighFill";

export default WifiHighFill;
