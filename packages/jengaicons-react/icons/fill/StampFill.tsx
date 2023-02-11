import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StampFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M14.822 17.143 12.473 6.3a3 3 0 0 1 2.932-3.635h3.589a3 3 0 0 1 2.904 3.752l-2.779 10.726h8.595a1 1 0 0 1 1 1v5.48a1 1 0 0 1-1 1H6.206a1 1 0 0 1-1-1v-5.48a1 1 0 0 1 1-1h8.615Zm-9.615 11.39a1 1 0 0 1 1-1h21.506a1 1 0 1 1 0 2H6.207a1 1 0 0 1-1-1Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

StampFill.displayName = "StampFill";

export default StampFill;
