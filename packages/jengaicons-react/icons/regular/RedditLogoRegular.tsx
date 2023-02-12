import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RedditLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M22.429 8.714a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428ZM19.539 22.429a7.734 7.734 0 0 1-7.077 0"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m16 11.286.857-5.143 3.877.596M8.651 13.201c1.962-1.192 4.533-1.915 7.35-1.915 2.815 0 5.386.723 7.348 1.915h0a2.572 2.572 0 1 1 3.387 3.728h0A5.53 5.53 0 0 1 27.144 19c0 4.26-4.989 7.714-11.143 7.714-6.154 0-11.143-3.453-11.143-7.714a5.53 5.53 0 0 1 .407-2.071h0a2.572 2.572 0 1 1 3.387-3.727h0Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.714 19.429a1.714 1.714 0 1 0 0-3.43 1.714 1.714 0 0 0 0 3.43ZM20.286 19.429a1.714 1.714 0 1 0 0-3.43 1.714 1.714 0 0 0 0 3.43Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

RedditLogoRegular.displayName = "RedditLogoRegular";

export default RedditLogoRegular;
