import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ShuffleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m24.4 5.277 4.242 4.243-4.242 4.242M24.4 19.644l4.242 4.243L24.4 28.13"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M4.643 9.52h2.653a8 8 0 0 1 6.463 3.285l5.687 7.796a8 8 0 0 0 6.463 3.286h2.734M4.643 23.873h2.653a8 8 0 0 0 6.463-3.286l.224-.306m14.66-10.775h-2.734a8 8 0 0 0-6.463 3.285l-.223.306"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ShuffleRegular.displayName = "ShuffleRegular";

export default ShuffleRegular;
