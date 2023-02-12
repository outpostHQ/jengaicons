import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ChartLineFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M6.883 6.953a1 1 0 1 0-2 0v18.66a1 1 0 0 0 1 1h22.154a1 1 0 1 0 0-2H6.883v-4.227l6.315-5.56 6.955 5.872a1 1 0 0 0 1.433-.149l7.231-9.261a1 1 0 0 0-1.576-1.23l-6.592 8.441-6.82-5.757a1 1 0 0 0-1.305.013l-5.64 4.966V6.953Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ChartLineFill.displayName = "ChartLineFill";

export default ChartLineFill;
