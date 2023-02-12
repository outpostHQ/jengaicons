import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AppleLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.75 6.412A3.766 3.766 0 0 1 21.264 4M27.207 21.757C25.727 25.37 23.04 28 20.794 28h-8.471c-3.294 0-7.53-5.647-7.53-11.765a7.059 7.059 0 0 1 11.765-5.26v-.001a7.059 7.059 0 0 1 10.255.898h0a5.65 5.65 0 0 0 .393 9.885h0Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AppleLogoRegular.displayName = "AppleLogoRegular";

export default AppleLogoRegular;
