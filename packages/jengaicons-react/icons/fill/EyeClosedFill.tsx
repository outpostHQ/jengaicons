import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EyeClosedFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size = 32 } = props;

    return (
      <svg
        style={{ width: size, height: size }}
        ref={ref}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        {...props}
      >
        <path
          d="m26.105 13.792 2.85 4.936M20.238 16.535l.889 5.04M13.685 16.533l-.889 5.041M7.823 13.788l-2.863 4.96M4.974 10.99c2.1 2.6 5.95 5.887 11.993 5.887 6.042 0 9.893-3.287 11.993-5.887"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

EyeClosedFill.displayName = "EyeClosedFill";

export default EyeClosedFill;
