import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SlidersHorizontalRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M18.727 22.5H4M28 22.5h-3.818M21.455 25.227a2.727 2.727 0 1 0 0-5.454 2.727 2.727 0 0 0 0 5.454ZM10 10.5H4M28 10.5H15.455M12.727 13.227a2.727 2.727 0 1 0 0-5.454 2.727 2.727 0 0 0 0 5.454Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SlidersHorizontalRegular.displayName = "SlidersHorizontalRegular";

export default SlidersHorizontalRegular;
