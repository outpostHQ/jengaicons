import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const FolderSimpleLockFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color } = props;

    return (
      <svg
        style={{ width: size || 32, height: size || 32 }}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          fill={color || "#000000"}
          fillRule="evenodd"
          d="M4.96 5.668a1 1 0 0 0-1 1v19.23a1 1 0 0 0 1 1h9.57a1 1 0 1 0 0-2H5.96V7.668h6.609l3.713 3.427a.996.996 0 0 0 .678.265h11V13.2a1 1 0 0 0 2 0V10.36a1 1 0 0 0-1-1H17.35l-3.712-3.427a1 1 0 0 0-.678-.265h-8Zm13.438 14.776a1 1 0 0 1 1-1h1.562v-.546a3.5 3.5 0 1 1 7 0v.546h1.562a1 1 0 0 1 1 1v5.409a1 1 0 0 1-1 1H19.398a1 1 0 0 1-1-1v-5.41Zm4.562-1.546a1.5 1.5 0 1 1 3 0v.5h-3v-.5Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

FolderSimpleLockFill.displayName = "FolderSimpleLockFill";

export default FolderSimpleLockFill;
