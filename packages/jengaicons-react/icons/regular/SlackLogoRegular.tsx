import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SlackLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 7a3 3 0 1 1 6 0v5a4 4 0 0 1-4 4h-1.94a.06.06 0 0 1-.06-.06V7ZM22 13a3 3 0 1 1 6 0 3 3 0 0 1-3 3h-2.97a.03.03 0 0 1-.03-.03V13ZM16 25a3 3 0 1 0 6 0 3 3 0 0 0-3-3h-2.97a.03.03 0 0 0-.03.03V25ZM10 19a3 3 0 1 1-6 0 3 3 0 0 1 3-3h2.97a.03.03 0 0 1 .03.03V19Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
        />
        <path
          d="M16 7a3 3 0 1 0-6 0 3 3 0 0 0 3 3h2.97a.03.03 0 0 0 .03-.03V7ZM16 25a3 3 0 1 1-6 0v-5a4 4 0 0 1 4-4h1.94a.06.06 0 0 1 .06.06V25ZM25 16a3 3 0 1 1 0 6h-5a4 4 0 0 1-4-4v-1.94a.06.06 0 0 1 .06-.06H25ZM7 16a3 3 0 1 1 0-6h5a4 4 0 0 1 4 4v1.94a.06.06 0 0 1-.06.06H7Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SlackLogoRegular.displayName = "SlackLogoRegular";

export default SlackLogoRegular;
