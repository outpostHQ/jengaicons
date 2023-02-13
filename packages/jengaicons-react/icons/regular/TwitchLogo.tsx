import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const TwitchLogo = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          strokeWidth={weight || weightCtx || "2"}
          d="M20.835 9.715v5.802M15.033 9.715v5.802"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeWidth={weight || weightCtx || "2"}
          d="M26.204 4H5.796a.5.5 0 0 0-.5.5v17.912a.5.5 0 0 0 .5.5H9.02a.5.5 0 0 1 .5.5v3.491a.5.5 0 0 0 .828.378l4.887-4.246a.5.5 0 0 1 .328-.123h5.19a.5.5 0 0 0 .334-.128l5.451-4.907a.5.5 0 0 0 .166-.372V4.5a.5.5 0 0 0-.5-.5Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TwitchLogo.displayName = "TwitchLogo";

export default TwitchLogo;
