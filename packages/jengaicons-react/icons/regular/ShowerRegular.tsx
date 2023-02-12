import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShowerRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.552 26.345a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483ZM11.448 23.448a1.241 1.241 0 1 0 0-2.482 1.241 1.241 0 0 0 0 2.482ZM5.241 23.035a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483ZM8.138 20.138a1.241 1.241 0 1 0 0-2.483 1.241 1.241 0 0 0 0 2.483Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28 5.655h-2.968a.827.827 0 0 0-.585.243L21.38 8.966 8.07 11.184a.827.827 0 0 0-.45 1.402l10.14 10.139a.827.827 0 0 0 1.402-.45l2.218-13.31"
        />
      </svg>
    );
  }
);

ShowerRegular.displayName = "ShowerRegular";

export default ShowerRegular;
