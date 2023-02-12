import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BellSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12 23.073v.985c0 1.046.421 2.048 1.171 2.788A4.03 4.03 0 0 0 16 28a4.03 4.03 0 0 0 2.828-1.154A3.913 3.913 0 0 0 20 24.058v-.985M6 5l20 22"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.874 23.073s-2.566-3.65-3-6.13a11.319 11.319 0 0 1-.122-2.596C24.04 9.41 20.944 4 16 4c-1.954 0-3.619.845-4.9 2.171m11.107 16.902H5.126s2.566-3.65 3-6.13c.144-.828.175-1.705.122-2.596a11.673 11.673 0 0 1 .956-5.294"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BellSlashRegular.displayName = "BellSlashRegular";

export default BellSlashRegular;
