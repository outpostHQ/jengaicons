import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CaretUpRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M15.646 10.354 4.854 21.146a.5.5 0 0 0 .353.854h21.586a.5.5 0 0 0 .353-.854L16.354 10.354a.5.5 0 0 0-.708 0Z"
        />
      </svg>
    );
  }
);

CaretUpRegular.displayName = "CaretUpRegular";

export default CaretUpRegular;
