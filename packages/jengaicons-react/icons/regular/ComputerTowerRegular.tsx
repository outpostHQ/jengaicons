import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ComputerTowerRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M20 9h-8M20 13h-8"
        />
        <path
          fill={color || "#000000"}
          d="M16 24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 4h18v24H7V4Z"
        />
      </svg>
    );
  }
);

ComputerTowerRegular.displayName = "ComputerTowerRegular";

export default ComputerTowerRegular;
