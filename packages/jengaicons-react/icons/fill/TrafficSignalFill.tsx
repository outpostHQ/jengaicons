import * as React from "react";
import { forwardRef } from "react";
import type { SVGSVGElement } from "react";
import type { JengaIconProps } from "../../src/base";

const TrafficSignalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M24.96 5.283a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1v3h-3a1 1 0 1 0 0 2h3v8h-3a1 1 0 1 0 0 2h3v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7h3a1 1 0 0 0 0-2h-3v-8h3a1 1 0 0 0 0-2h-3v-3Zm-8 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
          clip-rule="evenodd"
        />
      </svg>
    );
  }
);

TrafficSignalFill.displayName = "TrafficSignalFill";

export default TrafficSignalFill;
