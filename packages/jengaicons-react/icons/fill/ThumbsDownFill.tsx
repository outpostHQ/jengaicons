import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ThumbsDownFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.96 17.666h6.492V5.61H4.96z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="m16.354 26.957-4.902-9.64V5.61h15.699l1.54 12.781a2 2 0 0 1-1.986 2.24h-6.499v3.327a3 3 0 0 1-3 3h-.852Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m16.354 26.957-4.902-9.64V5.61h15.699l1.54 12.781a2 2 0 0 1-1.986 2.24h-6.499v3.327a3 3 0 0 1-3 3h-.852Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ThumbsDownFill.displayName = "ThumbsDownFill";

export default ThumbsDownFill;
