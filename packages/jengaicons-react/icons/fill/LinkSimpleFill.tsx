import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const LinkSimpleFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M21.44 6.052a5.752 5.752 0 0 0-4.067 1.684l-2.8 2.8a1 1 0 1 0 1.415 1.414l2.8-2.8a3.751 3.751 0 0 1 5.305 5.306l-2.8 2.8a1 1 0 0 0 1.414 1.414l2.8-2.8a5.751 5.751 0 0 0-4.067-9.818Zm-.413 6.164a1 1 0 0 1 0 1.414l-6.72 6.72a1 1 0 0 1-1.414-1.415l6.72-6.72a1 1 0 0 1 1.414 0Zm-8.4 1.68a1 1 0 0 1 0 1.414l-2.8 2.8a3.751 3.751 0 0 0 5.306 5.305l2.8-2.8a1 1 0 1 1 1.414 1.415l-2.8 2.8a5.752 5.752 0 0 1-8.134-8.134l2.8-2.8a1 1 0 0 1 1.415 0Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

LinkSimpleFill.displayName = "LinkSimpleFill";

export default LinkSimpleFill;
