import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const ShoppingCart = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="M12.756 28a2.519 2.519 0 1 0 0-5.037 2.519 2.519 0 0 0 0 5.037ZM22.83 28a2.519 2.519 0 1 0 0-5.037 2.519 2.519 0 0 0 0 5.037ZM8.474 8.148h18.607l-2.737 9.582a1.658 1.658 0 0 1-1.596 1.203h-9.94a1.659 1.659 0 0 1-1.596-1.203L7.46 4.602A.83.83 0 0 0 6.663 4H4.918"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ShoppingCart.displayName = "ShoppingCart";

export default ShoppingCart;
