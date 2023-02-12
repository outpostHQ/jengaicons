import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const HeadphonesFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 18.208V27.267h-6.117v-9.059h6.117a11.91 11.91 0 0 0-12-11.91 11.91 11.91 0 0 0-12 11.91h5.935v9.06H4.96v-9.06a11.91 11.91 0 0 1 12-11.91 11.91 11.91 0 0 1 12 11.91Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28.96 18.208V27.267h-6.117v-9.059h6.117Zm0 0a11.91 11.91 0 0 0-12-11.91 11.91 11.91 0 0 0-12 11.91m0 0V27.267h5.935v-9.059H4.96Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

HeadphonesFill.displayName = "HeadphonesFill";

export default HeadphonesFill;
