import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const RedditLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.389 9.139a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429Z"
          fill={color || colorCtx || "#000000"}
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m16.96 11.71.857-5.143 3.877.597"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M16.96 11.71c-2.815 0-5.387.723-7.349 1.916a2.57 2.57 0 0 0-4.622 1.897 2.571 2.571 0 0 0 1.235 1.83 5.53 5.53 0 0 0-.407 2.071c0 4.26 4.99 7.715 11.143 7.715 6.154 0 11.143-3.454 11.143-7.715a5.53 5.53 0 0 0-.406-2.07 2.572 2.572 0 1 0-3.388-3.728c-1.961-1.193-4.533-1.916-7.349-1.916ZM14.39 18.14a1.714 1.714 0 1 1-3.429 0 1.714 1.714 0 0 1 3.429 0Zm6.567 5.603a1 1 0 0 0-.915-1.778 6.733 6.733 0 0 1-6.162 0 1 1 0 0 0-.915 1.778 8.733 8.733 0 0 0 7.992 0Zm.29-3.889a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

RedditLogosvgFill.displayName = "RedditLogosvgFill";

export default RedditLogosvgFill;
