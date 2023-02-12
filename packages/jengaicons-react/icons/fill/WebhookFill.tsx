import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const WebhookFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        d="m10.107 22.308 4.715-7.779M17.606 10.259l4 7.47M15.169 22.308h8.701M14.838 14.53a5.09 5.09 0 1 1 7.511-2.424M21.642 17.732a5.09 5.09 0 1 1-1.462 8.08M8.661 17.357a5.09 5.09 0 1 0 6.476 5.05"
        stroke={color || colorCtx || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="17.607"
        cy="10.259"
        r="2.438"
        fill={color || colorCtx || "#000000"}
      />
      <circle
        cx="23.87"
        cy="22.308"
        r="2.438"
        transform="rotate(135 23.87 22.308)"
        fill={color || colorCtx || "#000000"}
      />
      <circle
        cx="2.438"
        cy="2.438"
        r="2.438"
        transform="scale(1 -1) rotate(-45 -23.598 -19.191)"
        fill={color || colorCtx || "#000000"}
      />

      {children || childrenCtx}
    </svg>
  );
});

WebhookFill.displayName = "WebhookFill";

export default WebhookFill;
