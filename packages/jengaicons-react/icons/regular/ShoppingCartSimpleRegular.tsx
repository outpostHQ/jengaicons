import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShoppingCartSimpleRegular = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color } = props;

    return (
      <svg
        style={{ width: size || 32, height: size || 32 }}
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          fill={color || "#000000"}
          d="M12.086 27.23a1.797 1.797 0 1 0 0-3.594 1.797 1.797 0 0 0 0 3.594ZM23.765 27.23a1.797 1.797 0 1 0 0-3.594 1.797 1.797 0 0 0 0 3.594Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7.85 9.262H28l-2.965 10.376a1.796 1.796 0 0 1-1.727 1.303H12.543a1.797 1.797 0 0 1-1.728-1.303L6.753 5.422a.898.898 0 0 0-.864-.652H4"
        />
      </svg>
    );
  }
);

ShoppingCartSimpleRegular.displayName = "ShoppingCartSimpleRegular";

export default ShoppingCartSimpleRegular;
