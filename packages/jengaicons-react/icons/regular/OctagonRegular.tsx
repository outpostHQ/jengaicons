import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const OctagonRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.834 4.083a.54.54 0 0 1 .38.16l6.631 6.749c.1.102.156.24.155.382l-.083 9.46a.539.539 0 0 1-.16.38l-6.749 6.631a.54.54 0 0 1-.382.155l-9.46-.083a.539.539 0 0 1-.38-.16l-6.631-6.749A.54.54 0 0 1 4 20.626l.083-9.46a.54.54 0 0 1 .16-.38l6.749-6.631A.54.54 0 0 1 11.374 4l9.46.083Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

OctagonRegular.displayName = "OctagonRegular";

export default OctagonRegular;
