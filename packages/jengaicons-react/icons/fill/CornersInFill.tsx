import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CornersInFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.76 3.783a1 1 0 0 1 1 1v6.2h6.2a1 1 0 0 1 0 2h-7.2a1 1 0 0 1-1-1v-7.2a1 1 0 0 1 1-1Zm-16.8 16.8a1 1 0 1 0 0 2h6.2v6.2a1 1 0 1 0 2 0v-7.2a1 1 0 0 0-1-1h-7.2Zm16.8 0a1 1 0 0 0-1 1v7.2a1 1 0 1 0 2 0v-6.2h6.2a1 1 0 0 0 0-2h-7.2Zm-8.6-15.8a1 1 0 0 0-2 0v6.2h-6.2a1 1 0 1 0 0 2h7.2a1 1 0 0 0 1-1v-7.2Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CornersInFill.displayName = "CornersInFill";

export default CornersInFill;
