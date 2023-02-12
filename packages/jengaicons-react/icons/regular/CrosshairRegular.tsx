import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CrosshairRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16 25.778c5.4 0 9.778-4.378 9.778-9.778S21.4 6.222 16 6.222 6.222 10.6 6.222 16 10.6 25.778 16 25.778ZM16 4v4.444M4 16h4.444M16 28v-4.445M28 16h-4.445"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 19.556a3.556 3.556 0 1 0 0-7.112 3.556 3.556 0 0 0 0 7.112Z"
        />
      </svg>
    );
  }
);

CrosshairRegular.displayName = "CrosshairRegular";

export default CrosshairRegular;
