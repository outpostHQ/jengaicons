import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HouseFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="m5.78 14.407 10.377-9.512a1 1 0 0 1 1.343-.008l10.63 9.519a1 1 0 0 1 .334.745v12.132a1 1 0 0 1-1 1h-6.256a1 1 0 0 1-1-1v-6.12a1 1 0 0 0-1-1h-4.677a1 1 0 0 0-1 1v6.12a1 1 0 0 1-1 1H6.456a1 1 0 0 1-1-1v-12.14a1 1 0 0 1 .324-.736Z"
        fill="#1C1B1F"
      />
    </svg>
  );
});

HouseFill.displayName = "HouseFill";

export default HouseFill;
