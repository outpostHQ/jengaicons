import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const StripeLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M10.635 19.57c0 1.972 2.402 3.57 5.365 3.57s5.366-1.598 5.366-3.57c0-4.76-10.433-2.975-10.433-7.14 0-1.972 2.104-3.57 5.067-3.57 2.223 0 3.962.899 4.692 2.18"
        />
        <rect
          width="24"
          height="24"
          x="4"
          y="4"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          rx=".5"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

StripeLogoRegular.displayName = "StripeLogoRegular";

export default StripeLogoRegular;
