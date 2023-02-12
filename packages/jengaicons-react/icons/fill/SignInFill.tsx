import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SignInFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M20.759 26.384a1 1 0 0 1 1-1h3.402V8.182h-3.402a1 1 0 1 1 0-2h4.402a1 1 0 0 1 1 1v19.202a1 1 0 0 1-1 1h-4.402a1 1 0 0 1-1-1Zm-3.415-10.601-2.535-2.536a1 1 0 0 1 1.414-1.414l4.236 4.236a1.022 1.022 0 0 1 .198.273.995.995 0 0 1-.192 1.149l-4.242 4.242a1 1 0 0 1-1.414-1.415l2.536-2.535H7.759a1 1 0 1 1 0-2h9.585Z"
        clip-rule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

SignInFill.displayName = "SignInFill";

export default SignInFill;
