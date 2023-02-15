import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const StorefrontFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M26.942 27.263V18.28H6.978v8.984h19.964Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M26.942 27.263V18.28H6.978v8.984h19.964Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.883 14.356a3.923 3.923 0 1 1-7.846 0"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13.037 14.356A3.924 3.924 0 0 1 9.19 18.28c-2.2.042-4-1.8-4-4V12.74c0-.734 1.292-6.439 1.812-6.958a2.77 2.77 0 0 1 1.958-.811h16a2.77 2.77 0 0 1 1.958.81c.52.52 1.81 6.225 1.81 6.959v1.538c0 2.2-1.8 4.042-3.999 4a3.923 3.923 0 0 1-3.846-3.923"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

StorefrontFill.displayName = "StorefrontFill";

export default StorefrontFill;
