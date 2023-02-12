import * as React from "react";
import { forwardRef, useContext } from "react";
import type { SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const ShoppingCartSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.086 27.23a1.797 1.797 0 1 0 0-3.594 1.797 1.797 0 0 0 0 3.594ZM23.765 27.23a1.797 1.797 0 1 0 0-3.594 1.797 1.797 0 0 0 0 3.594Z"
          fill={color || colorCtx || "#000000"}
        />
        <path
          d="M7.85 9.262H28l-2.965 10.376a1.796 1.796 0 0 1-1.727 1.303H12.543a1.797 1.797 0 0 1-1.728-1.303L6.753 5.422a.898.898 0 0 0-.864-.652H4"
          stroke={color || colorCtx || "#000000"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

ShoppingCartSimpleRegular.displayName = "ShoppingCartSimpleRegular";

export default ShoppingCartSimpleRegular;
