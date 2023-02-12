import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const InstagramLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 21.217a5.217 5.217 0 1 0 0-10.434 5.217 5.217 0 0 0 0 10.434Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          rx="5"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
        />
        <path
          d="M22.782 10.783a1.565 1.565 0 1 0 0-3.13 1.565 1.565 0 0 0 0 3.13Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

InstagramLogoRegular.displayName = "InstagramLogoRegular";

export default InstagramLogoRegular;
