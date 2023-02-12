import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BatteryHighFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          d="M4.96 9.428a1 1 0 0 1 1-1h18.073a1 1 0 0 1 1 1v13.71a1 1 0 0 1-1 1H5.96a1 1 0 0 1-1-1V9.427Zm12 .855a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0v-10a1 1 0 0 1 1-1Zm-3 1a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-10Zm-5-1a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0v-10a1 1 0 0 1 1-1Zm21 2.509a1 1 0 0 0-2 0v6.982a1 1 0 1 0 2 0v-6.982Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

BatteryHighFill.displayName = "BatteryHighFill";

export default BatteryHighFill;
