import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PauseFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      <rect
        x="6.051"
        y="4.783"
        width="7.091"
        height="24"
        rx=".5"
        fill="#1C1B1F"
      />
      <rect
        x="20.778"
        y="4.783"
        width="7.091"
        height="24"
        rx=".5"
        fill="#1C1B1F"
      />
    </svg>
  );
});

PauseFill.displayName = "PauseFill";

export default PauseFill;
