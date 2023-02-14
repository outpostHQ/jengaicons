import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Palette = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M27.702 18.925c.206-.91.306-1.84.298-2.772-.056-6.604-5.52-11.963-12.123-11.897a12.002 12.002 0 0 0-3.874 23.318A3 3 0 0 0 16 24.744v-.488a3 3 0 0 1 3-3h5.776a2.999 2.999 0 0 0 2.926-2.331v0Z"
        />
        <path
          fill={color || colorCtx || "#000000"}
          d="M16 11.256a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10.37 14.506a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10.37 21.006a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21.63 14.506a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Palette.displayName = "Palette";

export default Palette;
