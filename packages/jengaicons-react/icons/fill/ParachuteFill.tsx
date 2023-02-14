import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ParachuteFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.114 5.95a12.52 12.52 0 0 1 21.373 8.853 1 1 0 0 1-.689.95l-10.83 8.079v2.451h.92a1 1 0 1 1 0 2h-3.84a1 1 0 0 1 0-2h.92v-2.405l-11.129-8.21a1 1 0 0 1-.391-.98A12.52 12.52 0 0 1 8.114 5.95Zm13.368 9.853h3.905l-6.965 5.195 3.06-5.195Zm.26-2h5.698a10.52 10.52 0 0 0-9.23-9.446c2.493 2.634 3.359 6.707 3.532 9.446ZM15.876 4.34c-1.62 1.802-3.588 5.101-3.68 9.463H6.495a10.52 10.52 0 0 1 9.381-9.463Zm-3.353 11.463 3.125 5.354-7.257-5.354h4.132Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ParachuteFill.displayName = "ParachuteFill";

export default ParachuteFill;
