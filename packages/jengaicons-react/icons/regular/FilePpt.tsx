import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const FilePpt = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M26 21h-4.5M23.75 28v-7M4.299 18.041V4h15.236l8.166 8.2v5.841"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M19.615 12.121V4.15l7.978 7.971h-7.978Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M5.043 24.99h2.591a2.043 2.043 0 0 0 2.043-2.043v0a2.043 2.043 0 0 0-2.043-2.043H5.067a.023.023 0 0 0-.024.023V28M13.433 24.99h2.59a2.043 2.043 0 0 0 2.044-2.043v0a2.043 2.043 0 0 0-2.043-2.043h-2.568a.023.023 0 0 0-.023.023V28"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FilePpt.displayName = "FilePpt";

export default FilePpt;
