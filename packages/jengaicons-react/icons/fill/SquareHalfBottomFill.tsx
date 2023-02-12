import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const SquareHalfBottomFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M4.96 3.533a1 1 0 0 0-1 1v24a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-24a1 1 0 0 0-1-1h-24Zm1 13v-11h22v11h-22Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

SquareHalfBottomFill.displayName = "SquareHalfBottomFill";

export default SquareHalfBottomFill;
