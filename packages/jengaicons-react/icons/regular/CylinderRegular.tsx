import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CylinderRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 11.72c4.013 0 7.265-1.729 7.265-3.86C23.265 5.728 20.013 4 16 4c-4.012 0-7.265 1.728-7.265 3.86 0 2.131 3.253 3.86 7.265 3.86Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.735 7.86v16.33c0 .879.371 1.736 1.115 2.203 3.598 2.257 8.516 2.026 12.153-.002.827-.461 1.262-1.374 1.262-2.32V7.86"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CylinderRegular.displayName = "CylinderRegular";

export default CylinderRegular;
