import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const AppleLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.71 6.837a3.766 3.766 0 0 1 3.514-2.413"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M28.167 22.181c-1.48 3.614-4.166 6.243-6.413 6.243h-8.47c-3.295 0-7.53-5.647-7.53-11.764a7.06 7.06 0 0 1 11.765-5.261 7.06 7.06 0 0 1 10.255.898 5.65 5.65 0 0 0 .392 9.884Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

AppleLogosvgFill.displayName = "AppleLogosvgFill";

export default AppleLogosvgFill;
