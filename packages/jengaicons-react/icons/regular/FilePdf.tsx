import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const FilePdf = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M5.071 17.35V4.283h14.18l7.598 7.631v5.436"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M19.324 11.84V4.423l7.425 7.419h-7.425ZM5.07 25.468h2.475a1.881 1.881 0 0 0 1.88-1.882v0a1.881 1.881 0 0 0-1.88-1.88H5.07v6.532M15.416 21.705h-1.634v6.534h1.634a3.267 3.267 0 0 0 0-6.534ZM26.749 21.726h-3.925v6.53M22.848 25.369h3.355"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FilePdf.displayName = "FilePdf";

export default FilePdf;
