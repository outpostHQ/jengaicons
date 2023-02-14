import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CursorTextFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.452 7.052a1 1 0 0 1 1-1h2.508a3.99 3.99 0 0 1 3 1.354 3.99 3.99 0 0 1 3-1.354h2.509a1 1 0 1 1 0 2H19.96a2 2 0 0 0-2 1.974v5.216h1.83a1 1 0 0 1 0 2h-1.83v5.298a2 2 0 0 0 2 1.974h2.509a1 1 0 1 1 0 2H19.96a3.99 3.99 0 0 1-3-1.354 3.99 3.99 0 0 1-3 1.354h-2.508a1 1 0 1 1 0-2h2.508a2 2 0 0 0 2-1.974v-5.297h-1.729a1 1 0 1 1 0-2h1.73V10.026a2 2 0 0 0-2-1.974h-2.51a1 1 0 0 1-1-1Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CursorTextFill.displayName = "CursorTextFill";

export default CursorTextFill;
