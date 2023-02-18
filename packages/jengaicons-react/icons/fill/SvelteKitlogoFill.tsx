import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SvelteKitlogoFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          d="M25.864 15.028c4.112-6.634-4.131-13.469-9.99-9.64l-5.572 3.551c-2.698 1.758-3.87 5.134-2.224 8.603-4.114 6.24 3.891 13.549 9.99 9.645l5.572-3.552c3.031-1.996 3.727-5.438 2.224-8.607Zm-13.95-3.791 5.564-3.55c3.655-2.189 7.863 1.637 6.346 5.202a7.495 7.495 0 0 0-2.668-1.354c.29-1.152-1.047-2.006-1.977-1.412l-5.576 3.539c-1.378.952.091 2.912 1.454 2.09l2.125-1.354c4.768-2.691 9.281 3.77 4.846 6.936l-5.564 3.55c-3.353 2.144-7.916-1.29-6.346-5.203.834.631 1.72 1.095 2.668 1.355a1.332 1.332 0 0 0 1.991 1.423l5.562-3.55c1.372-1.03-.1-2.892-1.452-2.09l-2.133 1.354c-4.714 2.755-9.332-3.77-4.84-6.936Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SvelteKitlogoFill.displayName = "SvelteKitlogoFill";

export default SvelteKitlogoFill;
