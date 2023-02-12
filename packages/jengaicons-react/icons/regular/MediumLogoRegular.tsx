import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const MediumLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10 22.429c3.314 0 6-2.879 6-6.429 0-3.55-2.686-6.429-6-6.429S4 12.45 4 16c0 3.55 2.686 6.429 6 6.429ZM22 22c1.42 0 2.571-2.686 2.571-6s-1.15-6-2.571-6c-1.42 0-2.572 2.686-2.572 6S20.58 22 22 22ZM28 10v12"
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

MediumLogoRegular.displayName = "MediumLogoRegular";

export default MediumLogoRegular;
