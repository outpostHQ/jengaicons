import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FolderSimpleLockFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 5.668a1 1 0 0 0-1 1v19.23a1 1 0 0 0 1 1h9.57a1 1 0 1 0 0-2H5.96V7.668h6.609l3.713 3.427a.996.996 0 0 0 .678.265h11V13.2a1 1 0 0 0 2 0V10.36a1 1 0 0 0-1-1H17.35l-3.712-3.427a1 1 0 0 0-.678-.265h-8Zm13.438 14.776a1 1 0 0 1 1-1h1.562v-.546a3.5 3.5 0 1 1 7 0v.546h1.562a1 1 0 0 1 1 1v5.409a1 1 0 0 1-1 1H19.398a1 1 0 0 1-1-1v-5.41Zm4.562-1.546a1.5 1.5 0 1 1 3 0v.5h-3v-.5Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FolderSimpleLockFill.displayName = "FolderSimpleLockFill";

export default FolderSimpleLockFill;
