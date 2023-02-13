import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const TwitchLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M27.164 4.424H6.756a.5.5 0 0 0-.5.5v17.912a.5.5 0 0 0 .5.5H9.98a.5.5 0 0 1 .5.5v3.492a.5.5 0 0 0 .828.377l4.887-4.246a.5.5 0 0 1 .328-.123h5.19a.5.5 0 0 0 .334-.128l5.452-4.907a.5.5 0 0 0 .165-.371V4.924a.5.5 0 0 0-.5-.5Zm-5.37 4.715a1 1 0 0 1 1 1v5.802a1 1 0 1 1-2 0v-5.802a1 1 0 0 1 1-1Zm-4.8 1a1 1 0 1 0-2 0v5.802a1 1 0 1 0 2 0v-5.802Z"
          clip-rule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

TwitchLogoFill.displayName = "TwitchLogoFill";

export default TwitchLogoFill;