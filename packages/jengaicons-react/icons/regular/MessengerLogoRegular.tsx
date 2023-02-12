import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const MessengerLogoRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.68 22.122a12 12 0 1 1 4.198 4.199h0L5.73 27.505a1.001 1.001 0 0 1-1.236-1.236l1.184-4.147h0Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m10.002 17.996 4.002-4.002 4.002 4.002 4.001-4.002"
        />
      </svg>
    );
  }
);

MessengerLogoRegular.displayName = "MessengerLogoRegular";

export default MessengerLogoRegular;
