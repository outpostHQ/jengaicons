import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SketchLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.26 12.962h23.432"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m10.895 12.697 4.617-6.05a.5.5 0 0 1 .793-.001l4.657 6.05a.5.5 0 0 1 .066.495l-4.656 11.342a.5.5 0 0 1-.926 0L10.83 13.188a.5.5 0 0 1 .066-.492Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22.006 6.194H9.95a.5.5 0 0 0-.381.177l-5.28 6.236a.5.5 0 0 0 .018.666L15.833 25.48a.5.5 0 0 0 .733-.007l11.136-12.199a.5.5 0 0 0 .011-.662L22.386 6.37a.5.5 0 0 0-.38-.175Z"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SketchLogoRegular.displayName = "SketchLogoRegular";

export default SketchLogoRegular;
