import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BluetoothXFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
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
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M18.76 12.683a1 1 0 0 0-1.4-.2l-2.4 1.8v-8l2.4 1.8a1 1 0 1 0 1.2-1.6l-4-3a1 1 0 0 0-1.6.8v10l-6.4-4.8a1 1 0 0 0-1.2 1.6l6.933 5.2-6.933 5.2a1 1 0 0 0 1.2 1.6l6.4-4.8v10a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-6.933-5.2 2.933-2.2a1 1 0 0 0 .2-1.4Zm9.907-6.107a1 1 0 0 1 0 1.414l-2.293 2.293 2.293 2.293a1 1 0 1 1-1.414 1.414l-2.293-2.293-2.293 2.293a1 1 0 0 1-1.414-1.414l2.293-2.293-2.293-2.293a1 1 0 0 1 1.414-1.414l2.293 2.293 2.293-2.293a1 1 0 0 1 1.414 0Zm-8.374 15.707-5.333-4v8l5.333-4Z"
          fill="#1C1B1F"
        />
      </svg>
    );
  }
);

BluetoothXFill.displayName = "BluetoothXFill";

export default BluetoothXFill;
