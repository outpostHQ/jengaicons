import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ApplePodcastsLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 18.286a3 3 0 1 0 .001-6 3 3 0 0 0 0 6Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.498 19.186a7.996 7.996 0 0 1 7.462-10.88 8.002 8.002 0 0 1 7.946 7.07 7.997 7.997 0 0 1-.483 3.81"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.51 26.396a11.997 11.997 0 0 1-.75-19.713 12.002 12.002 0 0 1 18.72 6.238 11.993 11.993 0 0 1-5.07 13.475"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M13.876 20.678a2 2 0 0 1 1.961-2.392h2.246a2 2 0 0 1 1.961 2.392L18.83 26.75a1.907 1.907 0 0 1-3.74 0l-1.214-6.072Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ApplePodcastsLogoFill.displayName = "ApplePodcastsLogoFill";

export default ApplePodcastsLogoFill;
