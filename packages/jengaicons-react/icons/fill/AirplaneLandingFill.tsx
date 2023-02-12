import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AirplaneLandingFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M9.347 15.16a5 5 0 0 1-2.285-6.692L8.36 5.824a.5.5 0 0 1 .67-.229l2.36 1.16a.5.5 0 0 1 .273.366l.41 2.48a.5.5 0 0 0 .273.367l2.255 1.107a.5.5 0 0 0 .717-.39l.445-3.738a.5.5 0 0 1 .717-.39l2.126 1.044a.5.5 0 0 1 .262.317l1.599 5.848a.5.5 0 0 0 .262.317l5.436 2.67a3 3 0 0 1 1.371 4.014l-1.094 2.229a.5.5 0 0 1-.669.228L9.347 15.16ZM5.972 26.008a1 1 0 1 0 0 2h19.625a1 1 0 0 0 0-2H5.973Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AirplaneLandingFill.displayName = "AirplaneLandingFill";

export default AirplaneLandingFill;
