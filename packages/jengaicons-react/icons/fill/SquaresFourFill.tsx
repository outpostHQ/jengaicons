import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SquaresFourFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          d="M5.96 4.283a1 1 0 0 0-1 1v7.6a1 1 0 0 0 1 1h7.6a1 1 0 0 0 1-1v-7.6a1 1 0 0 0-1-1h-7.6Zm0 14.4a1 1 0 0 0-1 1v7.6a1 1 0 0 0 1 1h7.6a1 1 0 0 0 1-1v-7.6a1 1 0 0 0-1-1h-7.6Zm13.4-13.4a1 1 0 0 1 1-1h7.6a1 1 0 0 1 1 1v7.6a1 1 0 0 1-1 1h-7.6a1 1 0 0 1-1-1v-7.6Zm1 13.4a1 1 0 0 0-1 1v7.6a1 1 0 0 0 1 1h7.6a1 1 0 0 0 1-1v-7.6a1 1 0 0 0-1-1h-7.6Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SquaresFourFill.displayName = "SquaresFourFill";

export default SquaresFourFill;
