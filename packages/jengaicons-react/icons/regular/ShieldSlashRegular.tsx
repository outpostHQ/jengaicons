import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ShieldSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m4.542 4 22.7 23.06M5.504 5.269v9.882C6.589 21.884 9.408 24.386 16.48 28c2.933-1.348 5.029-2.59 6.608-4.12M12.638 4.94h14.82v10.21c-.4 1.568-.823 2.916-1.313 4.098-.123.283-.392.901-.49 1.112"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ShieldSlashRegular.displayName = "ShieldSlashRegular";

export default ShieldSlashRegular;
