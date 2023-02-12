import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EyeClosedRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m25.145 13.51 2.85 4.935M19.278 16.253l.889 5.04M12.725 16.25l-.889 5.041M6.863 13.505 4 18.465M4.014 10.707c2.1 2.6 5.95 5.887 11.993 5.887 6.042 0 9.892-3.287 11.993-5.887"
        />
      </svg>
    );
  }
);

EyeClosedRegular.displayName = "EyeClosedRegular";

export default EyeClosedRegular;
