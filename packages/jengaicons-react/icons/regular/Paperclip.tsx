import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Paperclip = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m19.08 10.434-9.098 9.098a1.749 1.749 0 0 0 0 2.474v0c.683.683 1.79.683 2.473 0l10.794-10.794a3.489 3.489 0 0 0 0-4.934v0a3.489 3.489 0 0 0-4.934 0l-10.8 10.8a5.238 5.238 0 0 0 0 7.407v0a5.238 5.238 0 0 0 7.407 0l8.558-8.558"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Paperclip.displayName = "Paperclip";

export default Paperclip;
