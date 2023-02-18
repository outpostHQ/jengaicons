import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SpotifyLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M28.96 16.283c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12Zm-5.153-3.349a15.024 15.024 0 0 0-13.707.007 1 1 0 0 0 .913 1.779 13.023 13.023 0 0 1 11.883-.006 1 1 0 1 0 .911-1.78Zm-6.854 2.349c1.737-.001 3.45.41 4.998 1.198a1 1 0 1 1-.908 1.782 8.991 8.991 0 0 0-8.176.006 1 1 0 0 1-.91-1.781 10.993 10.993 0 0 1 4.996-1.205Zm3.139 4.74a6.998 6.998 0 0 0-6.277.007 1 1 0 1 0 .9 1.786 4.997 4.997 0 0 1 4.482-.005 1 1 0 1 0 .895-1.788Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SpotifyLogoFill.displayName = "SpotifyLogoFill";

export default SpotifyLogoFill;
