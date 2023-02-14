import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ArchiveTrayFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 3.283a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-24a1 1 0 0 0-1-1h-24Zm1 17.329v6.67h22v-6.67h-4.276a.5.5 0 0 0-.354.146l-3.24 3.24a.5.5 0 0 1-.353.146h-5.71a.5.5 0 0 1-.354-.146l-3.24-3.24a.5.5 0 0 0-.354-.146H5.96Zm12-11.965a1 1 0 1 0-2 0v8.495l-3.341-3.343a1 1 0 0 0-1.415 1.415l5.05 5.049a.996.996 0 0 0 .747.292.996.996 0 0 0 .679-.305l5.037-5.036a1 1 0 0 0-1.414-1.415l-3.342 3.342V8.647Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ArchiveTrayFill.displayName = "ArchiveTrayFill";

export default ArchiveTrayFill;
