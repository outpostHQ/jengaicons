import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const DiceThreeFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M28.96 5.283a1 1 0 0 0-1-1h-22a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-22Zm-15 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm3 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm6 3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

DiceThreeFill.displayName = "DiceThreeFill";

export default DiceThreeFill;
