import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ShieldChevronFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.384 5.283v9.627c0 1.205-.117 2.288-.346 3.271l-10.576-6.129a1 1 0 0 0-1.003 0L5.89 18.176c-.236-.975-.355-2.054-.355-3.266V5.281a.999.999 0 0 1 1-.998h20.848a1 1 0 0 1 1 1ZM6.562 20.099c1.59 3.375 4.995 5.408 9.964 7.962a1 1 0 0 0 .876.018c4.91-2.284 8.388-4.387 9.99-7.961L16.96 14.073 6.562 20.1Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ShieldChevronFill.displayName = "ShieldChevronFill";

export default ShieldChevronFill;
