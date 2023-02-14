import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PlusMinusFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.708 7.406a1 1 0 0 1 1 1v2.75h2.752a1 1 0 0 1 0 2h-2.752v2.752a1 1 0 1 1-2 0v-2.751h-2.75a1 1 0 0 1 0-2h2.75V8.406a1 1 0 0 1 1-1Zm12.71 3.958a1 1 0 1 0-1.414-1.415L9.501 23.453a1 1 0 1 0 1.414 1.414l13.503-13.503ZM18.46 21.66a1 1 0 1 0 0 2h7.502a1 1 0 1 0 0-2H18.46Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PlusMinusFill.displayName = "PlusMinusFill";

export default PlusMinusFill;
