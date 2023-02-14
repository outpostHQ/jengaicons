import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SlackLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || colorCtx || "#000000"}
          d="M16.96 7.424a3 3 0 0 1 6 0v5a4 4 0 0 1-4 4h-1.94a.06.06 0 0 1-.06-.059v-8.94Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          d="M16.96 7.424a3 3 0 0 1 6 0v5a4 4 0 0 1-4 4h-1.94a.06.06 0 0 1-.06-.059v-8.94Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M22.96 13.424a3 3 0 1 1 3 3h-2.97a.03.03 0 0 1-.03-.03v-2.97Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          d="M22.96 13.424a3 3 0 1 1 3 3h-2.97a.03.03 0 0 1-.03-.03v-2.97ZM16.96 25.424a3 3 0 1 0 6 0 3 3 0 0 0-3-3h-2.97a.03.03 0 0 0-.03.03v2.97Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M10.96 19.424a3 3 0 1 1-3-3h2.97a.03.03 0 0 1 .03.03v2.97Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          d="M10.96 19.424a3 3 0 1 1-3-3h2.97a.03.03 0 0 1 .03.03v2.97ZM16.96 7.424a3 3 0 0 0-6 0 3 3 0 0 0 3 3h2.97a.03.03 0 0 0 .03-.03v-2.97Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M16.96 25.424a3 3 0 1 1-6 0v-5a4 4 0 0 1 4-4h1.94a.06.06 0 0 1 .06.06v8.94Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          d="M16.96 25.424a3 3 0 1 1-6 0v-5a4 4 0 0 1 4-4h1.94a.06.06 0 0 1 .06.06v8.94ZM25.96 16.424a3 3 0 1 1 0 6h-5a4 4 0 0 1-4-4v-1.94a.06.06 0 0 1 .06-.06h8.94Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          d="M7.96 16.424a3 3 0 0 1 0-6h5a4 4 0 0 1 4 4v1.941a.06.06 0 0 1-.06.06H7.96Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SlackLogoFill.displayName = "SlackLogoFill";

export default SlackLogoFill;
