import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CaretDownFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.606 21.93 5.814 11.136a.5.5 0 0 1 .353-.854h21.586a.5.5 0 0 1 .353.854L17.313 21.928a.5.5 0 0 1-.707 0Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

CaretDownFill.displayName = "CaretDownFill";

export default CaretDownFill;
