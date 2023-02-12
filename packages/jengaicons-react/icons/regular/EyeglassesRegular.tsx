import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EyeglassesRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.5 25.488a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM23.5 25.488a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM13 20.488h6"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeWidth="2"
          d="M9.117 6.512H9a5 5 0 0 0-5 5v9.675M22.883 6.512H23a5 5 0 0 1 5 5v9.675"
        />
      </svg>
    );
  }
);

EyeglassesRegular.displayName = "EyeglassesRegular";

export default EyeglassesRegular;
