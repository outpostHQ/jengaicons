import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GooglePhotosLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.422 16.886V4.424a6.923 6.923 0 0 1 4.154 12.462"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M17.422 16.886V4.424a6.923 6.923 0 0 1 4.154 12.462M17.422 15.963H4.96a6.923 6.923 0 0 1 12.462-4.154"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.499 15.963v12.461a6.923 6.923 0 0 1-4.154-12.461"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M16.499 15.963v12.461a6.923 6.923 0 0 1-4.154-12.461M16.499 16.886H28.96A6.923 6.923 0 0 1 16.5 21.04"
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

GooglePhotosLogosvgFill.displayName = "GooglePhotosLogosvgFill";

export default GooglePhotosLogosvgFill;
