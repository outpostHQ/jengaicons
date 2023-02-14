import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const ShoppingCartSimple = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          fill={color || colorCtx || "#000000"}
          d="M12.086 27.23a1.797 1.797 0 1 0 0-3.594 1.797 1.797 0 0 0 0 3.594ZM23.765 27.23a1.797 1.797 0 1 0 0-3.594 1.797 1.797 0 0 0 0 3.594Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M7.85 9.262H28l-2.965 10.376a1.796 1.796 0 0 1-1.727 1.303H12.543a1.797 1.797 0 0 1-1.728-1.303L6.753 5.422a.898.898 0 0 0-.864-.652H4"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ShoppingCartSimple.displayName = "ShoppingCartSimple";

export default ShoppingCartSimple;
