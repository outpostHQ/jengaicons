import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShoppingBagOpensvgFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          fillRule="evenodd"
          d="M28.96 10.283h-24v16h24v-16Zm-16 4a1 1 0 0 0-2 0 6 6 0 1 0 12 0 1 1 0 0 0-2 0 4 4 0 0 1-8 0Z"
          clip-rule="evenodd"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.96 6.283h24v20h-24z"
        />
      </svg>
    );
  }
);

ShoppingBagOpensvgFill.displayName = "ShoppingBagOpensvgFill";

export default ShoppingBagOpensvgFill;
