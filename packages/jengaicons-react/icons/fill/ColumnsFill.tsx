import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ColumnsFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        width="8"
        height="24"
        fill={color || "#000000"}
        rx="1"
        transform="matrix(1 0 0 -1 6.96 28.283)"
      />
      <rect
        width="8"
        height="24"
        fill={color || "#000000"}
        rx="1"
        transform="matrix(1 0 0 -1 18.96 28.283)"
      />
    </svg>
  );
});

ColumnsFill.displayName = "ColumnsFill";

export default ColumnsFill;
