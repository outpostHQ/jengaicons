import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const BluetoothConnectedRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m7.5 10 8 6M7.5 22l8-6"
        />
        <path
          fill={color || "#000000"}
          d="M7 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM25 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="m23.5 10-8-6v12l8-6ZM23.5 22l-8-6v12l8-6Z"
        />
      </svg>
    );
  }
);

BluetoothConnectedRegular.displayName = "BluetoothConnectedRegular";

export default BluetoothConnectedRegular;
