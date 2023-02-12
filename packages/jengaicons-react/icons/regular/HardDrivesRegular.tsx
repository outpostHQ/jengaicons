import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const HardDrivesRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M23.09 11.091a1.636 1.636 0 1 0 0-3.273 1.636 1.636 0 0 0 0 3.273ZM23.09 24.182a1.636 1.636 0 1 0 .001-3.273 1.636 1.636 0 0 0 0 3.273Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 5.09h24v8.728H4V5.091ZM4 18.182h24v8.727H4v-8.727Z"
        />
      </svg>
    );
  }
);

HardDrivesRegular.displayName = "HardDrivesRegular";

export default HardDrivesRegular;
