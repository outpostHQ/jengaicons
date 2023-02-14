import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DiamondsFourFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M13.02 8.18a1 1 0 0 0 0 1.415l3.19 3.19a1 1 0 0 0 1.415 0l3.19-3.19a1 1 0 0 0 0-1.415l-3.19-3.19a1 1 0 0 0-1.415 0l-3.19 3.19Zm0 14.791a1 1 0 0 0 0 1.414l3.19 3.19a1 1 0 0 0 1.415 0l3.19-3.19a1 1 0 0 0 0-1.414l-3.19-3.19a1 1 0 0 0-1.415 0l-3.19 3.19Zm7.438-5.945a1 1 0 0 1 0-1.414l3.19-3.19a1 1 0 0 1 1.415 0l3.19 3.19a1 1 0 0 1 0 1.414l-3.19 3.19a1 1 0 0 1-1.415 0l-3.19-3.19ZM5.667 15.612a1 1 0 0 0 0 1.414l3.19 3.19a1 1 0 0 0 1.415 0l3.19-3.19a1 1 0 0 0 0-1.414l-3.19-3.19a1 1 0 0 0-1.415 0l-3.19 3.19Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DiamondsFourFill.displayName = "DiamondsFourFill";

export default DiamondsFourFill;
