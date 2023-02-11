import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const CaretUpFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M16.607 10.636 5.814 21.43a.5.5 0 0 0 .353.854h21.586a.5.5 0 0 0 .354-.854L17.314 10.637a.5.5 0 0 0-.707 0Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

CaretUpFill.displayName = "CaretUpFill";

export default CaretUpFill;
