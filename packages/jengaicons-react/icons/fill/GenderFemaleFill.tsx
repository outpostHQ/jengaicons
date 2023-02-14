import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GenderFemaleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.96 12.783a8.002 8.002 0 0 1-7.002 7.938l.002.062v3.444h3.444a1 1 0 1 1 0 2H17.96v2.556a1 1 0 0 1-2 0v-2.556h-3.444a1 1 0 1 1 0-2h3.444v-3.444c0-.02 0-.041.002-.062a8.001 8.001 0 0 1 .998-15.938 8 8 0 0 1 8 8Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GenderFemaleFill.displayName = "GenderFemaleFill";

export default GenderFemaleFill;
