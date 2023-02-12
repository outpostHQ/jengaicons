import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TrendDownFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.884 22.297a1 1 0 0 0 1.076-1v-6.135a1 1 0 1 0-2 0v3.243l-6.054-7.754a1 1 0 0 0-1.433-.149l-7.59 6.408-7.262-6.394a1 1 0 0 0-1.322 1.501l7.91 6.963a1 1 0 0 0 1.306.014l7.454-6.293 5.93 7.596h-4.074a1 1 0 1 0 0 2h6.059Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TrendDownFill.displayName = "TrendDownFill";

export default TrendDownFill;
