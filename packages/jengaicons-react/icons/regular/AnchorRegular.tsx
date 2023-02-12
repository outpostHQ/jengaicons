import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AnchorRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16.011 27.503V8.701M16.011 8.7a2.35 2.35 0 1 0 0-4.7 2.35 2.35 0 0 0 0 4.7ZM11.31 13.401h9.402M5.67 17.162c.792 4.168 2.334 5.342 6.412 6.016 2.953.357 2.96 1.608 3.784 4.822.913-3.174 1.463-4.425 3.874-4.822 4.356-.697 5.772-2.036 6.59-6.016"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AnchorRegular.displayName = "AnchorRegular";

export default AnchorRegular;
