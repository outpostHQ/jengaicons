import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GenderTransgenderFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M29.63 4.042a.998.998 0 0 1 .33.741v6.533a1 1 0 1 1-2 0V7.197l-3.847 3.847 2.424 2.423a1 1 0 0 1-1.414 1.414l-2.424-2.423-2.781 2.781a1.036 1.036 0 0 1-.044.041 8.348 8.348 0 1 1-1.412-1.412l.041-.043 2.782-2.781-2.423-2.423a1 1 0 0 1 1.414-1.415l2.423 2.423 3.847-3.846h-4.12a1 1 0 1 1 0-2h6.534c.258 0 .493.098.67.259Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GenderTransgenderFill.displayName = "GenderTransgenderFill";

export default GenderTransgenderFill;
