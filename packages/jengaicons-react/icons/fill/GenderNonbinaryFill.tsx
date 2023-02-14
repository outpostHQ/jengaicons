import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GenderNonbinaryFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.475 3.953a1 1 0 0 0-1.116 1.66L15.167 7.5 12.36 9.387a1 1 0 1 0 1.116 1.66l2.485-1.67v4.01c0 .021 0 .043.002.064a7.7 7.7 0 0 0 .998 15.332 7.698 7.698 0 0 0 .998-15.332.97.97 0 0 0 .002-.064v-4.01l2.485 1.67a1 1 0 0 0 1.116-1.66L18.753 7.5l2.808-1.887a1 1 0 1 0-1.116-1.66L16.96 6.295l-3.485-2.342Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GenderNonbinaryFill.displayName = "GenderNonbinaryFill";

export default GenderNonbinaryFill;
