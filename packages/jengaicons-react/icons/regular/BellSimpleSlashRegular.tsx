import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const BellSimpleSlashRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12 27.997h8M6 5l20 22M26.874 23.073s-2.566-3.65-3-6.13a11.308 11.308 0 0 1-.122-2.596C24.04 9.41 20.944 4 16 4c-1.954 0-3.619.845-4.9 2.171m11.107 16.902H5.126s2.566-3.65 3-6.13c.144-.828.174-1.705.122-2.596a11.673 11.673 0 0 1 .956-5.294"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BellSimpleSlashRegular.displayName = "BellSimpleSlashRegular";

export default BellSimpleSlashRegular;
