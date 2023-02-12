import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const NumberThreeFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.117 24.255a5.446 5.446 0 0 0 9.687-3.418c0-3.008-3.277-5.447-6.285-5.447l6.284-9.107h-9.686"
        />
      </svg>
    );
  }
);

NumberThreeFill.displayName = "NumberThreeFill";

export default NumberThreeFill;
