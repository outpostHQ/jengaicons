import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const FileCsv = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M4.786 17.456V4h14.602l7.826 7.86v5.596"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M19.464 11.783v-7.64l7.646 7.64h-7.646Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m21.922 21.507 2.247 6.242a.1.1 0 0 0 .188.003l2.438-6.245M9.42 21.507H8.034a3.246 3.246 0 0 0-3.247 3.246v0A3.246 3.246 0 0 0 8.033 28H9.42M17.988 21.507h-3.01c-.897 0-1.624.727-1.624 1.623v0c0 .897.727 1.623 1.623 1.623h1.473"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M14.85 24.753h1.515c.896 0 1.623.727 1.623 1.624v0c0 .896-.727 1.623-1.623 1.623h-3.011"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FileCsv.displayName = "FileCsv";

export default FileCsv;
