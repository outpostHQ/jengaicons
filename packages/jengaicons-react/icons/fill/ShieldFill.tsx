import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const ShieldFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M28.384 14.91V5.281a.998.998 0 0 0-1-.998H6.536a1 1 0 0 0-1 .999v9.628c0 7.016 3.904 9.512 10.99 13.15.273.14.598.148.876.019 6.908-3.202 10.982-5.797 10.982-13.169Z"
      />
    </svg>
  );
});

ShieldFill.displayName = "ShieldFill";

export default ShieldFill;
