import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const EyeglassesRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M8.5 25.488a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM23.5 25.488a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM13 20.488h6"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.117 6.512H9a5 5 0 0 0-5 5v9.675M22.883 6.512H23a5 5 0 0 1 5 5v9.675"
          stroke="#1C1B1F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
);

EyeglassesRegular.displayName = "EyeglassesRegular";

export default EyeglassesRegular;
