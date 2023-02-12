import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SlidersHorizontalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M16.232 11.766a2.728 2.728 0 0 1-5.09 0c-.059.011-.12.017-.182.017h-6a1 1 0 1 1 0-2h6c.062 0 .123.006.183.016a2.728 2.728 0 0 1 5.089 0c.059-.01.12-.016.183-.016H28.96a1 1 0 1 1 0 2H16.415c-.063 0-.124-.006-.183-.017Zm6.182 13.744c1.16 0 2.15-.723 2.545-1.744.06.011.12.017.183.017h3.818a1 1 0 1 0 0-2h-3.818c-.063 0-.124.006-.183.017a2.728 2.728 0 0 0-5.09 0c-.058-.011-.12-.017-.182-.017H4.96a1 1 0 1 0 0 2h14.727a.998.998 0 0 0 .183-.017 2.728 2.728 0 0 0 2.544 1.744Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SlidersHorizontalFill.displayName = "SlidersHorizontalFill";

export default SlidersHorizontalFill;
