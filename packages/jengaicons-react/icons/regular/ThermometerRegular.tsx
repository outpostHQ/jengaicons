import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ThermometerRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M22.643 13.5a2.143 2.143 0 1 0 0-4.285 2.143 2.143 0 0 0 0 4.286ZM12.786 25.073a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286ZM12.786 20.787v-8.572M9.664 17.652V7.063c0-1.58 1.395-2.863 3.116-2.863 1.72 0 3.116 1.282 3.116 2.863v10.59"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M9.666 17.659a5.732 5.732 0 1 0 6.239 0"
        />
      </svg>
    );
  }
);

ThermometerRegular.displayName = "ThermometerRegular";

export default ThermometerRegular;
