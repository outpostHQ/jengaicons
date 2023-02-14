import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GooglePodcastsLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.96 4.424v2.77M22.499 9.501v2.77M16.96 25.655v2.77M16.96 10.886v11.077M11.422 9.501v7.385M22.499 15.963v7.385M5.883 15.04v2.769M11.422 20.578v2.77M28.037 15.04v2.769"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GooglePodcastsLogoFill.displayName = "GooglePodcastsLogoFill";

export default GooglePodcastsLogoFill;
