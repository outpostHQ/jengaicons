import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const NumberCircleNineFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 28.283c6.627 0 12-5.373 12-12s-5.373-12-12-12c-6.628 0-12 5.373-12 12s5.372 12 12 12Zm3.823-11.625a4.5 4.5 0 1 0-3.596 2.12l-2.086 3.492a1 1 0 1 0 1.717 1.026l3.965-6.638Zm-1.7-1.054.049-.082a2.5 2.5 0 1 0-.049.082Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

NumberCircleNineFill.displayName = "NumberCircleNineFill";

export default NumberCircleNineFill;
