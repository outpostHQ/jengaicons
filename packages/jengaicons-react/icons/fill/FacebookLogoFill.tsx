import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FacebookLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M17.96 28.383c6.16-.508 11-5.668 11-11.959 0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12 0 6.291 4.84 11.451 11 11.96v.002l.131.008a12.188 12.188 0 0 0 1.766-.003l.103-.005v-.003Zm0 0v-8.959h3a1 1 0 1 0 0-2h-3v-3.173c0-.519.215-1.013.592-1.375a2.034 2.034 0 0 1 1.408-.562h2c.552 0 1-.423 1-.945 0-.521-.448-.945-1-.945h-2a4.094 4.094 0 0 0-2.834 1.127 3.743 3.743 0 0 0-1.166 2.7v3.173h-3a1 1 0 0 0 0 2h3v8.96l.131.01a13.524 13.524 0 0 0 1.87-.01Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FacebookLogoFill.displayName = "FacebookLogoFill";

export default FacebookLogoFill;
