import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PauseFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
      <rect
        width="7.091"
        height="24"
        x="6.051"
        y="4.783"
        fill={color || "#000000"}
        rx=".5"
      />
      <rect
        width="7.091"
        height="24"
        x="20.778"
        y="4.783"
        fill={color || "#000000"}
        rx=".5"
      />
    </svg>
  );
});

PauseFill.displayName = "PauseFill";

export default PauseFill;
