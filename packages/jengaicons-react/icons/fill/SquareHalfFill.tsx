import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SquareHalfFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 3.291a1 1 0 0 0-1 1v23.984a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1V4.29a1 1 0 0 0-1-1h-24Zm1 23.984V5.29h11v21.984h-11Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

SquareHalfFill.displayName = "SquareHalfFill";

export default SquareHalfFill;
