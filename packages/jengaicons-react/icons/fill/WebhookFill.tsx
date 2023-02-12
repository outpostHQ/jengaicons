import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const WebhookFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
  const { size, color } = props;

  return (
    <svg
      style={{ width: size || 32, height: size || 32 }}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeWidth="2"
        d="m10.107 22.308 4.715-7.779M17.606 10.259l4 7.47M15.169 22.308h8.701M14.838 14.53a5.09 5.09 0 1 1 7.511-2.424M21.642 17.732a5.09 5.09 0 1 1-1.462 8.08M8.661 17.357a5.09 5.09 0 1 0 6.476 5.05"
      />
      <circle cx="17.607" cy="10.259" r="2.438" fill={color || "#000000"} />
      <circle
        cx="23.87"
        cy="22.308"
        r="2.438"
        fill={color || "#000000"}
        transform="rotate(135 23.87 22.308)"
      />
      <circle
        cx="2.438"
        cy="2.438"
        r="2.438"
        fill={color || "#000000"}
        transform="scale(1 -1) rotate(-45 -23.598 -19.191)"
      />
    </svg>
  );
});

WebhookFill.displayName = "WebhookFill";

export default WebhookFill;
