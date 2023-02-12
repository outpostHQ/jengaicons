import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FolderSimpleMinusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M17.35 10.744h10.61a1 1 0 0 1 1 1v12.77a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1V8.052a1 1 0 0 1 1-1h6.609a1 1 0 0 1 .678.265l3.426 3.162a1 1 0 0 0 .678.265Zm-3.39 6.539a1 1 0 1 0 0 2h6a1 1 0 0 0 0-2h-6Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FolderSimpleMinusFill.displayName = "FolderSimpleMinusFill";

export default FolderSimpleMinusFill;
