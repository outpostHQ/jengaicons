import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MathOperationsRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 21.91h7.273M9.636 18.273v7.272M13.273 9.182H6M26 20.099h-7.273M26 23.72h-7.273M25.09 6.455l-5.454 5.454M25.09 11.91l-5.454-5.455"
        />
      </svg>
    );
  }
);

MathOperationsRegular.displayName = "MathOperationsRegular";

export default MathOperationsRegular;
