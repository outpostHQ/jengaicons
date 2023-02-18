import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GooglePhotosLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M17.422 16.744V4.283a6.923 6.923 0 0 1 4.154 12.461"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.422 16.744V4.283a6.923 6.923 0 0 1 4.154 12.461M17.422 15.821H4.96a6.923 6.923 0 0 1 12.462-4.153"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M16.499 15.821v12.462a6.923 6.923 0 0 1-4.154-12.462"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16.499 15.821v12.462a6.923 6.923 0 0 1-4.154-12.462M16.499 16.744H28.96A6.923 6.923 0 0 1 16.5 20.898"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GooglePhotosLogoFill.displayName = "GooglePhotosLogoFill";

export default GooglePhotosLogoFill;
