import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const LaptopFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M4.96 6.92a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v14.363a1 1 0 0 1-1 1h-22a1 1 0 0 1-1-1V6.919Zm13.091 2.272a1.091 1.091 0 1 1-2.182 0 1.091 1.091 0 0 1 2.182 0ZM4.96 25.647a1 1 0 0 0 0 2h24a1 1 0 1 0 0-2h-24Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

LaptopFill.displayName = "LaptopFill";

export default LaptopFill;
