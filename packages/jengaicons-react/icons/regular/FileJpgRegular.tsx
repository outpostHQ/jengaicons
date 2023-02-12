import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileJpgRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.416 17.901V4H19.5l8.084 8.119V17.9"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.579 12.04V4.148l7.898 7.892H19.58Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M8.592 21.508v4.575A1.917 1.917 0 0 1 6.675 28v0a1.917 1.917 0 0 1-1.916-1.917v-.269M13.284 25.116h2.483a1.958 1.958 0 0 0 1.958-1.958v0a1.958 1.958 0 0 0-1.958-1.958h-2.46a.022.022 0 0 0-.023.022V28M26.756 21.2h-1.922a3.4 3.4 0 0 0-3.4 3.4v0a3.4 3.4 0 0 0 3.4 3.4h1.895a.026.026 0 0 0 .027-.026v-2.746a.5.5 0 0 0-.5-.5h-1.598"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FileJpgRegular.displayName = "FileJpgRegular";

export default FileJpgRegular;
