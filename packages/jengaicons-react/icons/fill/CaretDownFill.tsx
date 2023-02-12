import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CaretDownFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M16.606 21.93 5.814 11.136a.5.5 0 0 1 .353-.854h21.586a.5.5 0 0 1 .353.854L17.313 21.928a.5.5 0 0 1-.707 0Z"
        />
      </svg>
    );
  }
);

CaretDownFill.displayName = "CaretDownFill";

export default CaretDownFill;
