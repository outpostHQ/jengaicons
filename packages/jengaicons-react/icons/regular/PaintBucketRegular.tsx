import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PaintBucketRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.672 17.342a1.988 1.988 0 1 0 0-3.977 1.988 1.988 0 0 0 0 3.977ZM24.023 24.102c0-1.988 1.989-3.977 1.989-3.977S28 22.115 28 24.102a1.988 1.988 0 1 1-3.977 0v0ZM14.266 13.948 7.107 6.789"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 16 14.686 5.314 25.372 16 14.686 26.686 4 16Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PaintBucketRegular.displayName = "PaintBucketRegular";

export default PaintBucketRegular;
