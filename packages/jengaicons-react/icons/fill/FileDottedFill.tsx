import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const FileDottedFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M6.96 3.283a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1h.628a1 1 0 0 0 0-2H6.96Zm4.883 0a1 1 0 1 0 0 2h3.255a1 1 0 1 0 0-2h-3.255Zm6.51 0a1 1 0 1 0 0 2h1.213l.054.054v5.816a.5.5 0 0 0 .5.5h5.789l.051.051v1.711a1 1 0 1 0 2 0v-2.124a1 1 0 0 0-.291-.705l-.53-.532a1.067 1.067 0 0 0-.095-.109l-4.53-4.525a1.004 1.004 0 0 0-.08-.09L20.69 3.576a1 1 0 0 0-.709-.294h-1.627Zm-10.393 7a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm20 7.38a1 1 0 0 0-2 0v4.248a1 1 0 1 0 2 0v-4.248Zm-20 .62a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Zm20 7.876a1 1 0 0 0-2 0v1.124h-.667a1 1 0 1 0 0 2h1.667a1 1 0 0 0 1-1v-2.124Zm-20 .124a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1h1.667a1 1 0 1 0 0-2H7.96v-1Zm4 1a1 1 0 1 0 0 2h3.333a1 1 0 1 0 0-2H11.96Zm6.667 0a1 1 0 1 0 0 2h3.333a1 1 0 0 0 0-2h-3.333Z"
          fill={color || colorCtx || "#000000"}
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

FileDottedFill.displayName = "FileDottedFill";

export default FileDottedFill;
