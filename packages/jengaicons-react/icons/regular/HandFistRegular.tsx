import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HandFistRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 13V8a3 3 0 1 0-6 0v5a3 3 0 1 0 6 0Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19 17h6a3 3 0 1 0 0-6h-6a3 3 0 1 0 0 6ZM10 13v-2a3 3 0 0 0-6 0v2a3 3 0 1 0 6 0ZM22 10.97V8a3 3 0 1 0-6 0v2.97c0 .017.013.03.03.03h5.94a.03.03 0 0 0 .03-.03ZM16 21.81A4.81 4.81 0 0 1 20.81 17"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M28 13.972C28 21.843 23.342 28 16 28 8.145 28 4 21.076 4 13.205"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HandFistRegular.displayName = "HandFistRegular";

export default HandFistRegular;
