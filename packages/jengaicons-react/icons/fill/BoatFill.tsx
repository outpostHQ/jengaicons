import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BoatFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        d="M16.96 3.283a1 1 0 0 1 1 1v1.772h7.315a1 1 0 0 1 1 1v7.878l1.1.38c.402.14.672.518.672.945v4.018c0 4.273-5.088 6.242-10.75 7.922a1 1 0 0 1-.574-.002c-5.728-1.74-10.684-3.29-10.85-7.92-.124-3.445-.066-4.38-.027-4.635.01-.066.059-.105.122-.127l1.677-.575V7.055a1 1 0 0 1 1-1h7.315V4.283a1 1 0 0 1 1-1Zm-7.315 10.97 6.315-2.169v8.83a1 1 0 0 0 2 0v-8.86l6.315 2.186V8.055H9.645v6.197Z"
        clip-rule="evenodd"
      />
    </svg>
  );
});

BoatFill.displayName = "BoatFill";

export default BoatFill;
