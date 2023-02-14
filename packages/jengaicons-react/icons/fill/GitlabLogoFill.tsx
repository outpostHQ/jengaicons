import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GitlabLogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m27.5 13.142 1.462 5.454-11.786 8.455-12.299-8.455L6.5 13.142"
        />
        <path
          fill={color || colorCtx || "#000000"}
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 13.142H6.5l2-7 3.5 7ZM22 13.142h5.5l-2-7-3.5 7Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          stroke={color || colorCtx || "#000000"}
          strokeLinejoin="round"
          d="M22 13.142H12l5 14 5-14Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

GitlabLogoFill.displayName = "GitlabLogoFill";

export default GitlabLogoFill;
