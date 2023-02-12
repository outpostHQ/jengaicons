import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const PolygonRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.556 9.778a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334ZM6.667 17.778a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334ZM20 27.556a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334ZM25.333 12.444a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333ZM22.76 9.076l-4.632-1.263M13.573 8.895 8.65 13.327M8.817 16.688l9.032 6.624M20.888 22.374l3.558-10.081"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

PolygonRegular.displayName = "PolygonRegular";

export default PolygonRegular;
