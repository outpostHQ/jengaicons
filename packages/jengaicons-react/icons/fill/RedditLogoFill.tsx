import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RedditLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23.389 8.997a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16.96 11.569.857-5.143 3.877.596"
        />
        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M16.96 11.569c-2.815 0-5.387.723-7.349 1.915a2.57 2.57 0 0 0-4.622 1.897 2.571 2.571 0 0 0 1.235 1.83 5.53 5.53 0 0 0-.407 2.072c0 4.26 4.99 7.714 11.143 7.714 6.154 0 11.143-3.454 11.143-7.714a5.53 5.53 0 0 0-.406-2.071 2.573 2.573 0 0 0-1.448-4.782 2.57 2.57 0 0 0-1.94 1.055c-1.961-1.193-4.533-1.916-7.349-1.916Zm-2.571 6.428a1.714 1.714 0 1 1-3.429 0 1.714 1.714 0 0 1 3.429 0Zm6.567 5.604a1 1 0 0 0-.915-1.779 6.733 6.733 0 0 1-6.162 0 1 1 0 0 0-.915 1.779 8.733 8.733 0 0 0 7.992 0Zm.29-3.89a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

RedditLogoFill.displayName = "RedditLogoFill";

export default RedditLogoFill;
