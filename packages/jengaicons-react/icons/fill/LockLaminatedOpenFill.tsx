import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LockLaminatedOpenFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.644 3.283a6 6 0 0 0-6 6v5.105H6.591a1 1 0 0 0-1 1v1.623h22.737v-1.623a1 1 0 0 0-1-1H11.644V9.283a4 4 0 0 1 4-4h2.632a4 4 0 0 1 4 4v.053a1 1 0 1 0 2 0v-.053a6 6 0 0 0-6-6h-2.632ZM5.591 18.511h22.737v2.074H5.591v-2.074Zm0 3.574v2.128h22.737v-2.128H5.591Zm0 5.198v-1.57h22.737v1.57a1 1 0 0 1-1 1H6.591a1 1 0 0 1-1-1Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LockLaminatedOpenFill.displayName = "LockLaminatedOpenFill";

export default LockLaminatedOpenFill;
