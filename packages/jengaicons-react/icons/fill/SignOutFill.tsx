import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SignOutFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M13.16 26.384a1 1 0 0 0-1-1H8.76V8.182h3.402a1 1 0 1 0 0-2H7.759a1 1 0 0 0-1 1v19.202a1 1 0 0 0 1 1h4.402a1 1 0 0 0 1-1Zm10.587-10.601-2.536-2.536a1 1 0 0 1 1.414-1.414l4.236 4.236a1.009 1.009 0 0 1 .199.276.997.997 0 0 1-.192 1.145l-4.243 4.243a1 1 0 0 1-1.414-1.415l2.536-2.535H14.16a1 1 0 1 1 0-2h9.586Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

SignOutFill.displayName = "SignOutFill";

export default SignOutFill;
