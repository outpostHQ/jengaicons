import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SpiralRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.52 16.48a.96.96 0 0 1 .96.96 1.92 1.92 0 0 1-1.92 1.92 2.87 2.87 0 0 1-2.88-2.88 3.84 3.84 0 0 1 3.84-3.84 4.8 4.8 0 0 1 4.8 4.8 5.76 5.76 0 0 1-5.76 5.76 6.72 6.72 0 0 1-6.72-6.72 7.692 7.692 0 0 1 7.68-7.68 8.64 8.64 0 0 1 8.64 8.64 9.599 9.599 0 0 1-9.6 9.6A10.56 10.56 0 0 1 4 16.48 11.52 11.52 0 0 1 15.52 4.96 12.48 12.48 0 0 1 28 17.44"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SpiralRegular.displayName = "SpiralRegular";

export default SpiralRegular;
