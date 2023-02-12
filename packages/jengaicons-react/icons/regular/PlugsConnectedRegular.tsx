import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const PlugsConnectedRegular = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="m28 20-3-1M7 13l-3-1M12 4l1 3M19 25l1 3M10.675 21.325l-3.728 3.728M20.764 20.764l-9.529-9.528"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.207 19.827a2 2 0 0 1 0-2.828l3.901-3.9 5.902 5.9-3.9 3.902a2 2 0 0 1-2.83 0l-3.073-3.074Z"
        />
        <path
          stroke={color || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m21.325 10.675 3.728-3.728"
        />
        <path
          stroke={color || "#000000"}
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19.827 9.207a2 2 0 0 0-2.828 0l-3.901 3.901L19 19.01l3.9-3.9a2 2 0 0 0 0-2.83l-3.073-3.073Z"
        />
      </svg>
    );
  }
);

PlugsConnectedRegular.displayName = "PlugsConnectedRegular";

export default PlugsConnectedRegular;
