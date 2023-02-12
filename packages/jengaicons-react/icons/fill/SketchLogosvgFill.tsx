import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SketchLogosvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M5.22 13.386h23.433"
        />
        <path
          fill={color || colorCtx || "#000000"}
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="m11.855 13.121 4.617-6.05a.5.5 0 0 1 .794 0l4.656 6.05a.5.5 0 0 1 .067.494l-4.657 11.343a.5.5 0 0 1-.925-.002L11.79 13.613a.5.5 0 0 1 .065-.492Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M22.966 6.618H10.91a.5.5 0 0 0-.382.177l-5.28 6.236a.5.5 0 0 0 .018.667l11.526 12.206a.5.5 0 0 0 .733-.006l11.137-12.2a.5.5 0 0 0 .01-.661l-5.327-6.243a.5.5 0 0 0-.38-.176Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SketchLogosvgFill.displayName = "SketchLogosvgFill";

export default SketchLogosvgFill;
