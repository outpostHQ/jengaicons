import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const StopFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        width="20"
        height="20"
        x="6.96"
        y="6.783"
        fill={color || "#000000"}
        rx="1"
      />
    </svg>
  );
});

StopFill.displayName = "StopFill";

export default StopFill;
