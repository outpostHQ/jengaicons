import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TwitchLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20.835 9.715v5.802M15.033 9.715v5.802"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.204 4H5.796a.5.5 0 0 0-.5.5v17.912a.5.5 0 0 0 .5.5H9.02a.5.5 0 0 1 .5.5v3.491a.5.5 0 0 0 .828.378l4.887-4.246a.5.5 0 0 1 .328-.123h5.19a.5.5 0 0 0 .334-.128l5.451-4.907a.5.5 0 0 0 .166-.372V4.5a.5.5 0 0 0-.5-.5Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TwitchLogoRegular.displayName = "TwitchLogoRegular";

export default TwitchLogoRegular;
