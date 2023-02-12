import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EyeClosedFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m26.105 13.792 2.85 4.936M20.238 16.535l.889 5.04M13.685 16.533l-.889 5.041M7.823 13.788l-2.863 4.96M4.974 10.99c2.1 2.6 5.95 5.887 11.993 5.887 6.042 0 9.893-3.287 11.993-5.887"
        />
      </svg>
    );
  }
);

EyeClosedFill.displayName = "EyeClosedFill";

export default EyeClosedFill;
