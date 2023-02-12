import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BluetoothConnectedFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M25.46 10.283a1 1 0 0 0-.4-.8l-8-6a1 1 0 0 0-1.6.8v10l-6.4-4.8a1 1 0 0 0-1.2 1.6l6.933 5.2-6.933 5.2a1 1 0 0 0 1.2 1.6l6.4-4.8v10a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-6.933-5.2 6.933-5.2a1 1 0 0 0 .4-.8Zm-8 4v-8l5.333 4-5.333 4Zm-9.5 3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm19.5-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-4.667 6-5.333-4v8l5.333-4Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

BluetoothConnectedFill.displayName = "BluetoothConnectedFill";

export default BluetoothConnectedFill;
