import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AirplaneTiltRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.91 6.144a2.955 2.955 0 0 0-4.18 0l-4.028 4.028L7.016 6.64 4.13 9.526l8.489 5.73-2.65 2.65H6.952L4 20.859l5.386 1.767 1.702 5.321 2.952-2.951v-2.801l2.757-2.758 5.73 8.489 2.888-2.887-3.534-10.686 4.03-4.029a2.955 2.955 0 0 0 0-4.18v0Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AirplaneTiltRegular.displayName = "AirplaneTiltRegular";

export default AirplaneTiltRegular;
