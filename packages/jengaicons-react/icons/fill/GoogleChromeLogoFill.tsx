import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GoogleChromeLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 28.424c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12-6.628 0-12 5.373-12 12 0 6.628 5.372 12 12 12Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16.96 20.924a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16.96 11.924h11.125M13.06 18.674 7.498 9.037M20.86 18.674l-5.563 9.638"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GoogleChromeLogoFill.displayName = "GoogleChromeLogoFill";

export default GoogleChromeLogoFill;
