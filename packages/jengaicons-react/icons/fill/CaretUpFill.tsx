import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CaretUpFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.607 10.636 5.814 21.43a.5.5 0 0 0 .353.854h21.586a.5.5 0 0 0 .354-.854L17.314 10.637a.5.5 0 0 0-.707 0Z"
      />
    </svg>
  );
});

CaretUpFill.displayName = "CaretUpFill";

export default CaretUpFill;
