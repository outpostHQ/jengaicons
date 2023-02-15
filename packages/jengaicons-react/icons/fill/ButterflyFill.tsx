import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ButterflyFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M12.553 3.99a1 1 0 0 0-1.216 1.587l1.095.838a8.999 8.999 0 0 1 3.118 4.459 5.519 5.519 0 1 0-4.109 9.203h1.136a4.353 4.353 0 1 0 3.383 7.129V13.743v.008-1.768c0-.025.002-.05.005-.075h1.99c.003.032.005.065.005.098v15.2a4.353 4.353 0 1 0 3.383-7.13h1.135a5.519 5.519 0 1 0-4.108-9.202 8.999 8.999 0 0 1 3.118-4.459l1.094-.838a1 1 0 0 0-1.216-1.588l-1.094.838a10.997 10.997 0 0 0-3.312 4.15 10.996 10.996 0 0 0-3.312-4.15l-1.095-.838Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ButterflyFill.displayName = "ButterflyFill";

export default ButterflyFill;
