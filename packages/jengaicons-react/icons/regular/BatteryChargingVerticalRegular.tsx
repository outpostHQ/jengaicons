import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BatteryChargingVerticalRegular = forwardRef<
  SVGSVGElement,
  JengaIconProps
>((props, ref) => {
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
        stroke={color || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.51 4h6.98M15.998 13.462l-1.779 4.42h3.504l-1.725 4.474"
      />
      <path
        stroke={color || "#000000"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.145 28V7.927h15.71V28H8.145Z"
      />
    </svg>
  );
});

BatteryChargingVerticalRegular.displayName = "BatteryChargingVerticalRegular";

export default BatteryChargingVerticalRegular;
